import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import { Grid, Container, Card, Box, Typography } from "@mui/material";
import Footer from "src/components/Footer";
import InvoicesTable from "./InvoicesTable";
import { DueDate, DueDateInterface } from "src/models/DueDate";

interface CaseNonPaidInvoicesProps {
  caseId:string;
  id: string;
  
}


function CaseNonPaidInvoices({caseId,id}:CaseNonPaidInvoicesProps) {
  // A ajouter dans un autre fichier separe et l'importer ici , c'est pour regler 
  // le problem undefined
    const handlError:DueDateInterface ={
      id: 1,
      dueDateId: "",
      paymentDueDate: "",
      dueDateStatus: "",
      principalAmount: 0,
      interestAmount: 0,
      insuranceAmount: 0,
      ancillaryCharge: 0,
      remainingPrincipalBalance: 0,
      startDate: "",
      modificationDate: "",
      totalInstallmentAmount: 0,
      latePaymentCharge: 0,
      unpaidPrincipalAmount: 0,
      accruedInterest: 0,
      unpaidInsurancePrenium: 0,
      unpaidAncillaryCharges: 0,
      _case: {
        id: 0,
        caseId: "",
        status: {
          id: 0,
          status: ""
        },
        procedure: {
          id: 0,
          procedureLabel: ""
        },
        thirdParty: {
          id: 0,
          thirdPartyId: undefined,
          tiersType: "",
          title: "",
          lastName: "",
          firstName: "",
          companyName: "",
          birthDate: "",
          nationality: "",
          countryOfResidence: "",
          businessSector: "",
          legalForm: "",
          occupation: "",
          personalEmail: "",
          businessEmail: "",
          privatePhone: "",
          businessPhone: "",
          landLinePhone: "",
          faxNumber: "",
          commercialRegister: "",
          supportingDocumentType: "",
          supportingDocumentNumber: "",
          supportingDocumentExpirationDate: "",
          maritalStatus: ""
        }
      },
      reglements:null
    }
  return (
    <Card>
      <Typography variant="h3" sx={{ mt: 1, ml: 2 }}>
        Factures impayés du contrat
      </Typography>
      <Box>
        <InvoicesTable dueDate={handlError} caseId={caseId} id = {id} />
      </Box>
    </Card>
  );
}

export default CaseNonPaidInvoices;
