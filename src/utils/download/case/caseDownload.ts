 import { Case } from "src/models/case";

// Assuming you're using TypeScript based on your file naming
 import ExcelJS from 'exceljs';

export async function downloadExcel(data: Case[]) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('My Sheet');

  // Add a header row (if your data structure requires it)
  sheet.addRow(['IDENTIFIANT', 'Date début', 'Statut',"référence client","Nom","Prénom","Référence contrat","Montant nominal","Montant remboursé","Montant à récupérer","Date prochaine échéance","Nombre d’échéances échues", "Nombre échéances restante", "N d’échéances impayés"]);

  // Add data rows
  data.forEach(item => {
    sheet.addRow([item.caseId, item.startDate, item.status.status,"IND00000553",item.thirdParty.lastName,item.thirdParty.firstName,"MIC00000368",item.totalAmount,item.interestAmount,item.principalAmount,"Date prochaine échéance","Nombre d’échéances échues", "Nombre échéances restante", "N d’échéances impayés"]);
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
