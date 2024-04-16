import { Helmet } from "react-helmet-async";
import PageHeader, { PageHeaderHandles } from "./PageHeader";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import { Grid, Container } from "@mui/material";
import Footer from "src/components/Footer";
import ExistingCases from "./ExistingCases";
import { useRef, useState } from "react";
import { Case } from "src/models/case";

function Cases() {
  const [cases, setCases] = useState<Case[]>([]);
  const [selectedStatusId, setSelectedStatusId] = useState<number>(0);
  const [searchkeyWord, setSearchkeyWord] = useState<string>("");

  const PageHeaderRef = useRef<PageHeaderHandles>(null);

  function updateSelectedStatusId(id: number) {
    console.log("selected statusid", id);
    if (PageHeaderRef.current) {
      console.log("calling function from PageHeaderRef.current");
      PageHeaderRef.current.updateSelectedStatus(id);
    }
  }

  return (
    <>
      <Helmet>
        <title>Cases - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <PageHeader
          ref={PageHeaderRef}
          cases={cases}
          setCases={setCases}
          selectedStatusId={selectedStatusId}
          setSelectedStatusId={setSelectedStatusId}
          searchkeyWord={searchkeyWord}
          setSearchkeyWord={setSearchkeyWord}
        />
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
            <ExistingCases
              updateSelectedStatusId={updateSelectedStatusId}
              cases={cases}
              setCases={setCases}
              selectedStatusId={selectedStatusId}
              searchkeyWord={searchkeyWord}
              setSearchkeyWord={setSearchkeyWord}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default Cases;
