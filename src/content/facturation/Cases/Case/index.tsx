import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Grid, Container } from '@mui/material';
import Footer from 'src/components/Footer';
import { useParams } from 'react-router-dom';
import CaseHeader from './CaseHeader';

  
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
          <Grid item xs={12}>
           empty {caseId}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Case;

