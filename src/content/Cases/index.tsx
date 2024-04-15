import { Helmet } from 'react-helmet-async';
import PageHeader, { PageHeaderHandles } from './PageHeader';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';

import ExistingCases from './ExistingCases';
import { useRef, useState } from 'react';
import { Case } from 'src/models/case';

function Cases() {
  const [cases, setCases] = useState<Case[]>([]);

  const PageHeaderRef = useRef<PageHeaderHandles>(null);

  function updateSelectedStatusId(id:number) {
   
    console.log('selected statusid',id);
      if (PageHeaderRef.current) {
        console.log('calling function from PageHeaderRef.current')
         PageHeaderRef.current.updateSelectedStatus(id);
      }
    }
  

  return (
    <>
      <Helmet>
        <title>Transactions - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader ref={PageHeaderRef} cases={cases} setCases={setCases} />
      </PageTitleWrapper>
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={1}
        >
          <Grid item xs={12}>
            <ExistingCases updateSelectedStatusId={updateSelectedStatusId} cases={cases} setCases={setCases} />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Cases;

