import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import { Container } from "@mui/material";
import Footer from "src/components/Footer";
import { useParams } from "react-router-dom";
import ContratHeader from "./ContratHeader";
import ContratClient from "./ContratClient";
import ContratFinance from "./ContratFinance";

function Contrat() {
  const { contratId } = useParams();

  return (
    <>
      <Helmet>
        <title>Transactions - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        {/* <CaseHeader caseId={caseId} /> */}
        {contratId && <ContratHeader contratId={contratId} />}
      </PageTitleWrapper>
      <Container maxWidth="xl">
        <ContratClient />
        <ContratFinance />
      </Container>
      <Footer />
    </>
  );
}

export default Contrat;
