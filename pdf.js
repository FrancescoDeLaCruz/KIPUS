import { getDatabase } from './base de datos.js';

export function initPDFExport() {
    const btnDownload = document.getElementById('btn-download-pdf');
    if (btnDownload) {
        btnDownload.addEventListener('click', () => {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();
            const db = getDatabase();

            doc.setFillColor(11, 15, 25);
            doc.rect(0, 0, 210, 297, 'F');

            doc.setTextColor(6, 182, 212);
            doc.setFontSize(22);
            doc.text("Kipus - ChezcoFinance", 20, 25);

            doc.setTextColor(148, 163, 184);
            doc.setFontSize(12);
            doc.text(`Reporte Ejecutivo Financiero - ${new Date().toLocaleDateString()}`, 20, 35);

            doc.setDrawColor(30, 41, 59);
            doc.line(20, 42, 190, 42);

            let y = 55;
            doc.setTextColor(248, 250, 252);
            doc.setFontSize(14);
            doc.text("Resumen de Últimas Transacciones:", 20, y);

            y += 10;
            doc.setFontSize(10);
            doc.setTextColor(148, 163, 184);

            db.transactions.slice(0, 10).forEach(t => {
                doc.text(`${t.date} | ${t.type.toUpperCase()} | ${t.concept} | S/ ${t.amount.toFixed(2)}`, 20, y);
                y += 8;
            });

            doc.save("Reporte_Financiero_Kipus.pdf");
        });
    }
}
