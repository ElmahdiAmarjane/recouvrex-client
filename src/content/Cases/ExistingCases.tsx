import { Card } from '@mui/material';
import CasesTable from './CasesTable';
import { Case } from 'src/models/case';

import { useEffect, useState } from 'react';
import { getFilteredCasesByUser } from 'src/utils/api/case/caseApiCall';

interface ExistingCasesProps {
  cases: Case[]; // Assuming Case is a type or interface representing a case
  setCases: React.Dispatch<React.SetStateAction<Case[]>>; // This is a typical type for a setState function when using useState
  updateSelectedStatusId:(id: number) =>void; 
}

function ExistingCases({cases, setCases,updateSelectedStatusId }:ExistingCasesProps) {

  const [casesBackUp, setCasesBackUp] = useState<Case[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFilteredCasesByUser();
        setCases(result);
        setCasesBackUp(result);
        console.log(result);
      } catch (error) {
        // Handle error
        console.error('Error fetching cases for user by userId:', error);
      }
    };

    fetchData();
  }, []);

  function resetAllCases() {
    console.log('reset all cases')
    setCases(casesBackUp);
  }

  

  return (
    <Card>
     {cases&& <CasesTable cryptoOrders={cases} updateSelectedStatusId={updateSelectedStatusId} resetAllCases={resetAllCases} />}
    </Card>
  );
}

export default ExistingCases;
