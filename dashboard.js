import { getDatabase, addTransaction, deleteTransaction, resetDatabase } from './base de datos.js';
import { updateCharts } from './gráficos.js';

export function initDashboard() {
    // Reloj en tiempo real
    setInterval(() => {
        const now = new Date();
        const clockEl = document.getElementById('real-time-clock');
        if (clockEl) clockEl.textContent = now.toLocaleTimeString();
    }, 1000);

    // Navegación entre vistas (Sidebar y Móvil)
    const navItems = document.querySelectorAll('.nav-item, .mobile-nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetView = item.getAttribute('data-view');
            
            document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
            document.getElementById(`view-${targetView}`).classList.add('active');

            navItems.forEach(nav => nav.classList.remove('active'));
            document.querySelectorAll(`[data-view="${targetView}"]`).forEach(n => n.classList.add('active'));

            document.getElementById('view-title').textContent = item.textContent.trim();
        });
    });

    // Control de Modales
    const modal = document.getElementById('data-modal');
    const btnOpenModal = document.getElementById('btn-open-modal');
    const btnMobileFab = document.getElementById('btn-mobile-fab');
    const btnCloseModal = document.getElementById('modal-close');

    const toggleModal = (show) => {
        if (show) modal.classList.remove('hidden');
        else modal.classList.add('hidden');
    };

    if (btnOpenModal) btnOpenModal.addEventListener('click', () => toggleModal(true));
    if (btnMobileFab) btnMobileFab.addEventListener('click', () => toggleModal(true));
    if (btnCloseModal) btnCloseModal.addEventListener('click', () => toggleModal(false));

    // Formulario de Registro
    const form = document.getElementById('financial-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const type = document.getElementById('record-type').value;
        const concept = document.getElementById('record-concept').value;
        const category = document.getElementById('record-category').value;
        const amount = parseFloat(document.getElementById('record-amount').value);
        const date = document.getElementById('record-date').value || new Date().toISOString().split('T')[0];

        addTransaction({ type, concept, category, amount, date });
        form.reset();
        toggleModal(false);
    });

    // Botón Restaurar
    const btnReset = document.getElementById('btn-reset-data');
    if (btnReset) {
        btnReset.addEventListener('click', () => {
            if (confirm('¿Estás seguro de restablecer todos los datos del sistema?')) {
                resetDatabase();
            }
        });
    }
}

export function updateDashboardUI() {
    const db = getDatabase();
    
    let totalIncome = 0;
    let totalExpense = 0;

    const recentBody = document.getElementById('recent-transactions-body');
    const fullBody = document.getElementById('full-transactions-body');
    if (recentBody) recentBody.innerHTML = '';
    if (fullBody) fullBody.innerHTML = '';

    db.transactions.forEach((t, index) => {
        if (t.type === 'ingreso') totalIncome += t.amount;
        else totalExpense += t.amount;

        const rowHTML = `
            <tr>
                <td>${t.date}</td>
                <td>${t.type === 'ingreso' ? '<span style="color:var(--accent-emerald)">Ingreso</span>' : '<span style="color:var(--accent-rose)">Gasto</span>'}</td>
                <td>${t.concept}</td>
                <td>${t.category}</td>
                <td>S/ ${t.amount.toFixed(2)}</td>
                <td><button class="btn-action danger" style="padding:4px 8px; font-size:0.75rem;" onclick="window.deleteTrx('${t.id}')"><i class="fa-solid fa-trash"></i></button></td>
            </tr>
        `;
        if (index < 5 && recentBody) recentBody.innerHTML += rowHTML;
        if (fullBody) fullBody.innerHTML += rowHTML;
    });

    const netSavings = totalIncome - totalExpense;
    let totalDebt = db.debts.reduce((acc, d) => acc + (d.total - d.paid), 0);

    document.getElementById('metric-income').textContent = `S/ ${totalIncome.toFixed(2)}`;
    document.getElementById('metric-expense').textContent = `S/ ${totalExpense.toFixed(2)}`;
    document.getElementById('metric-savings').textContent = `S/ ${netSavings.toFixed(2)}`;
    document.getElementById('metric-debt').textContent = `S/ ${totalDebt.toFixed(2)}`;

    // Renderizar Deudas con barras de progreso
    const debtListEl = document.getElementById('debt-progress-list');
    if (debtListEl) {
        debtListEl.innerHTML = '';
        db.debts.forEach(d => {
            const percent = Math.min(100, Math.round((d.paid / d.total) * 100));
            debtListEl.innerHTML += `
                <div class="progress-item">
                    <div class="progress-info">
                        <span><strong>${d.name}</strong> (Vence: ${d.due})</span>
                        <span>S/ ${d.paid} / S/ ${d.total} (${percent}%)</span>
                    </div>
                    <div class="progress-bar-bg">
                        <div class="progress-bar-fill" style="width: ${percent}%;"></div>
                    </div>
                </div>
            `;
        });
    }

    updateCharts(totalIncome, totalExpense);
}

// Exponer método de eliminación global para las tablas
window.deleteTrx = function(id) {
    deleteTransaction(id);
};
