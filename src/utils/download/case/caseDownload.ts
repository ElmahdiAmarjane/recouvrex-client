 import { Case } from "src/models/case";

// Assuming you're using TypeScript based on your file naming
import ExcelJS from 'exceljs';

export async function downloadExcel(data: Case[]) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('My Sheet');

  // Add a header row (if your data structure requires it)
  sheet.addRow(['IDENTIFIANT', 'Name', 'Value']);

  // Add data rows
  data.forEach(item => {
    sheet.addRow([item.caseId, item.date, item.startDate]);
  });

  try {
    const buffer = await workbook.xlsx.writeBuffer(); // Create a buffer
    const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'downloadedData.xlsx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error('Error creating Excel file', error);
  }
}
