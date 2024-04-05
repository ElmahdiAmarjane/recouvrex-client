import { Card } from '@mui/material';
import { CryptoOrder } from 'src/models/crypto_order';
import CasesTable from './CasesTable';
import { subDays } from 'date-fns';
import axios, { AxiosResponse } from 'axios';
import { Case } from 'src/models/Case';
import { useEffect, useState } from 'react';
import { getFilteredCases, getFilteredCasesByUser } from 'src/api/ApiMethods';
function ExistingCases() {

  const [cases, setCases] = useState<Case[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getFilteredCasesByUser("3");
        setCases(result);
      } catch (error) {
        // Handle error
        console.error('Error fetching cases:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Card>
      <CasesTable cases={cases} />
    </Card>
  );
}

export default ExistingCases;
