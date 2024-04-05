import { Card } from '@mui/material';
import { Case } from 'src/models/case';
import CasesTable from './CasesTable';
// import { subDays } from 'date-fns';

import { useEffect, useState } from 'react';
import { getFilteredCasesByUser } from 'src/utils/api/case/caseApiCall';

function ExistingCases() {
const cases_old: Case[] = [
    {
      identifiant: "COL00000062",
      date: "31/03/2023",
      statut: "Précontentieux",
      nom: "MIC000000396",
      type: "Recouvrement",
      contrat: "00001635",
      facture: "2618,00 €",
      montant: 2618.00,
      fournisseur: "Supplier A"
    },
    {
      identifiant: "COL00000061",
      date: "31/03/2023",
      statut: "Radié",
      nom: "MIC000000417",
      type: "Recouvrement",
      contrat: "00001768",
      facture: "1169,81 €",
      montant: 1169.81,
      fournisseur: "Supplier B"
    },
    {
      identifiant: "COL00000060",
      date: "31/03/2023",
      statut: "Prêt douteux",
      nom: "MIC000000414",
      type: "Recouvrement",
      contrat: "00001756",
      facture: "500,00 €",
      montant: 500.00,
      fournisseur: "Supplier C"
    },
    {
      identifiant: "COL00000062",
      date: "31/03/2023",
      statut: "Précontentieux",
      nom: "MIC000000396",
      type: "Recouvrement",
      contrat: "00001635",
      facture: "2618,00 €",
      montant: 2618.00,
      fournisseur: "Supplier A"
    },
    {
      identifiant: "COL00000061",
      date: "31/03/2023",
      statut: "Radié",
      nom: "MIC000000417",
      type: "Recouvrement",
      contrat: "00001768",
      facture: "1169,81 €",
      montant: 1169.81,
      fournisseur: "Supplier B"
    },
    {
      identifiant: "COL00000060",
      date: "31/03/2023",
      statut: "Prêt douteux",
      nom: "MIC000000414",
      type: "Recouvrement",
      contrat: "00001756",
      facture: "500,00 €",
      montant: 500.00,
      fournisseur: "Supplier C"
    },
    {
      identifiant: "COL00000062",
      date: "31/03/2023",
      statut: "Précontentieux",
      nom: "MIC000000396",
      type: "Recouvrement",
      contrat: "00001635",
      facture: "2618,00 €",
      montant: 2618.00,
      fournisseur: "Supplier A"
    },
    {
      identifiant: "COL00000061",
      date: "31/03/2023",
      statut: "Radié",
      nom: "MIC000000417",
      type: "Recouvrement",
      contrat: "00001768",
      facture: "1169,81 €",
      montant: 1169.81,
      fournisseur: "Supplier B"
    },
    {
      identifiant: "COL00000060",
      date: "31/03/2023",
      statut: "Prêt douteux",
      nom: "MIC000000414",
      type: "Recouvrement",
      contrat: "00001756",
      facture: "500,00 €",
      montant: 500.00,
      fournisseur: "Supplier C"
    },
    {
      identifiant: "COL00000062",
      date: "31/03/2023",
      statut: "Précontentieux",
      nom: "MIC000000396",
      type: "Recouvrement",
      contrat: "00001635",
      facture: "2618,00 €",
      montant: 2618.00,
      fournisseur: "Supplier A"
    },
    {
      identifiant: "COL00000061",
      date: "31/03/2023",
      statut: "Radié",
      nom: "MIC000000417",
      type: "Recouvrement",
      contrat: "00001768",
      facture: "1169,81 €",
      montant: 1169.81,
      fournisseur: "Supplier B"
    },
    {
      identifiant: "COL00000060",
      date: "31/03/2023",
      statut: "Prêt douteux",
      nom: "MIC000000414",
      type: "Recouvrement",
      contrat: "00001756",
      facture: "500,00 €",
      montant: 500.00,
      fournisseur: "Supplier C"
    },
    {
      identifiant: "COL00000062",
      date: "31/03/2023",
      statut: "Précontentieux",
      nom: "MIC000000396",
      type: "Recouvrement",
      contrat: "00001635",
      facture: "2618,00 €",
      montant: 2618.00,
      fournisseur: "Supplier A"
    },
    {
      identifiant: "COL00000061",
      date: "31/03/2023",
      statut: "Radié",
      nom: "MIC000000417",
      type: "Recouvrement",
      contrat: "00001768",
      facture: "1169,81 €",
      montant: 1169.81,
      fournisseur: "Supplier B"
    },
    {
      identifiant: "COL00000060",
      date: "31/03/2023",
      statut: "Prêt douteux",
      nom: "MIC000000414",
      type: "Recouvrement",
      contrat: "00001756",
      facture: "500,00 €",
      montant: 500.00,
      fournisseur: "Supplier C"
    },
    {
      identifiant: "COL00000062",
      date: "31/03/2023",
      statut: "Précontentieux",
      nom: "MIC000000396",
      type: "Recouvrement",
      contrat: "00001635",
      facture: "2618,00 €",
      montant: 2618.00,
      fournisseur: "Supplier A"
    },
    {
      identifiant: "COL00000061",
      date: "31/03/2023",
      statut: "Radié",
      nom: "MIC000000417",
      type: "Recouvrement",
      contrat: "00001768",
      facture: "1169,81 €",
      montant: 1169.81,
      fournisseur: "Supplier B"
    },
    {
      identifiant: "COL00000060",
      date: "31/03/2023",
      statut: "Prêt douteux",
      nom: "MIC000000414",
      type: "Recouvrement",
      contrat: "00001756",
      facture: "500,00 €",
      montant: 500.00,
      fournisseur: "Supplier C"
    },
    // ... additional case objects
  ];


  const [cases, setCases] = useState<Case[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFilteredCasesByUser("3");
        setCases(result);
        console.log(result);
      } catch (error) {
        // Handle error
        console.error('Error fetching cases for user by userId:', error);
      }
    };

    fetchData();
  }, []);

  

  return (
    <Card>
     {cases&& <CasesTable cryptoOrders={cases} />}
    </Card>
  );
}

export default ExistingCases;
