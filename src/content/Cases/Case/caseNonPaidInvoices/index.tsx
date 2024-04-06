import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import { Grid, Container, Card, Box, Typography } from "@mui/material";
import Footer from "src/components/Footer";
import InvoicesTable from "./InvoicesTable";

function CaseNonPaidInvoices() {
  return (
    <Card>
      <Typography variant="h3" sx={{ mt: 1, ml: 2 }}>
        Factures impayés du contrat
      </Typography>
      <Box>
        <InvoicesTable />
      </Box>
    </Card>
  );
}

export default CaseNonPaidInvoices;
