import { initAuth } from './firebase.js';
import { initDashboard, updateDashboardUI } from './dashboard.js';
import { initCharts } from './gráficos.js';
import { initPDFExport } from './pdf.js';

// Base de Datos en LocalStorage con datos semilla iniciales
const STORAGE_KEY = 'kipus_chezcofinance_data_v1';

const defaultData = {
    transactions: [
        { id: '1', type: 'ingreso', concept: 'Sueldo Principal', category: 'Salario', amount: 4500.00, date: '2026-08-01' },
        { id: '2', type: 'gasto', concept: 'Alquiler Departamento', category: 'Vivienda', amount: 1200.00, date: '2026-08-02' },
        { id: '3', type: 'gasto', concept: 'Supermercado Mensual', category: 'Alimentación', amount: 850.50, date: '2026-08-04' },
        { id: '4', type: 'deuda', concept: 'Caja Huancayo (Cuota)', category: 'Créditos Bancarios', amount: 450.00, date: '2026-08-05' }
    ],
    debts: [
        { id: 'd1', name: 'Caja Huancayo', total: 5400, paid: 2700, due: '2026-08-25' },
        { id: 'd2', name: 'Tarjeta BCP', total: 2500, paid: 1000, due: '2026-08-20' }
    ]
};

export function getDatabase() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
        return defaultData;
    }
    return JSON.parse(data);
}

export function saveDatabase(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    updateDashboardUI();
}

export function addTransaction(trx) {
    const db = getDatabase();
    db.transactions.unshift({ id: Date.now().toString(), ...trx });
    saveDatabase(db);
}

export function deleteTransaction(id) {
    const db = getDatabase();
    db.transactions = db.transactions.filter(t => t.id !== id);
    saveDatabase(db);
}

export function resetDatabase() {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
}

// Inicialización general al cargar la aplicación
document.addEventListener('DOMContentLoaded', () => {
    initAuth(() => {
        initDashboard();
        initCharts();
        initPDFExport();
        updateDashboardUI();
    });
});
