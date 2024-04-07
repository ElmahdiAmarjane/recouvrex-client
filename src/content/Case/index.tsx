import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import { useParams } from 'react-router-dom';
import CaseHeader from './CaseHeader';
import CaseReferences from './caseReferences';
import CaseTasks from './caseTasks';
import CaseIntervenants from './caseIntervenants';
import CaseNonPaidInvoices from './caseNonPaidInvoices';

  
function Case() {
    const { caseId } = useParams();


  return (
    <>
      <Helmet>
        <title>Transactions - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        {/* <CaseHeader caseId={caseId} /> */}
      {  caseId && <CaseHeader caseId={caseId} />}
      </PageTitleWrapper>
      <Container maxWidth="xl">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={1}
        >
          <Grid item xs={12}lg={4.5}>
           <CaseReferences/>
          </Grid>
          <Grid item xs={12}lg={7.5}>
           <CaseTasks/>
          </Grid>
          <Grid item xs={12} >
          <CaseIntervenants/>
          </Grid>
          <Grid item xs={12}>
          <CaseNonPaidInvoices/>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Case;

