let barChartInstance = null;
let doughnutChartInstance = null;

export function initCharts() {
    const ctxBar = document.getElementById('barChart').getContext('2d');
    barChartInstance = new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago'],
            datasets: [
                {
                    label: 'Ingresos',
                    data: [3000, 3200, 4000, 3900, 4100, 4300, 4200, 4500],
                    backgroundColor: '#10b981',
                    borderRadius: 6
                },
                {
                    label: 'Gastos',
                    data: [1800, 2100, 2400, 2000, 2200, 2500, 2300, 2050],
                    backgroundColor: '#f43f5e',
                    borderRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { labels: { color: '#94a3b8' } } },
            scales: {
                x: { ticks: { color: '#94a3b8' }, grid: { color: '#1e293b' } },
                y: { ticks: { color: '#94a3b8' }, grid: { color: '#1e293b' } }
            }
        }
    });

    const ctxDoughnut = document.getElementById('doughnutChart').getContext('2d');
    doughnutChartInstance = new Chart(ctxDoughnut, {
        type: 'doughnut',
        data: {
            labels: ['Vivienda', 'Alimentación', 'Créditos', 'Otros'],
            datasets: [{
                data: [1200, 850, 450, 300],
                backgroundColor: ['#06b6d4', '#10b981', '#f59e0b', '#f43f5e'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { position: 'bottom', labels: { color: '#94a3b8' } } }
        }
    });
}

export function updateCharts(income, expense) {
    if (barChartInstance) {
        barChartInstance.data.datasets[0].data[7] = income;
        barChartInstance.data.datasets[1].data[7] = expense;
        barChartInstance.update();
    }
}
