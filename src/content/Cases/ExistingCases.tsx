import { Card } from '@mui/material';
import { Case } from 'src/models/case';
import CasesTable from './CasesTable';
// import { subDays } from 'date-fns';

import { useEffect, useState } from 'react';
import { getFilteredCasesByUser } from 'src/utils/api/case/caseApiCall';

function ExistingCases() {

  const [cases, setCases] = useState<Case[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFilteredCasesByUser("1");
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
