import * as React from "react";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { Box, Container, IconButton, Tooltip } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import {
  formatDate,
  formatDateWithDifferentFormat,
  getCurrentDate,
  getCurrentDateTime,
} from "../../../../utils/formatDate/CurrentDateTime";
import { useState, useEffect } from "react";

import Alert from "@mui/material/Alert";

import { useParams } from "react-router-dom";
import { decryptArg } from "src/utils/cryptageFunctions/Decrypt";
import { getDueDatesByCaseIdAndDueDateId } from "src/utils/api/dueDate/DueDateApi";
import { DueDateInterface } from "src/models/DueDate";
import EditInvoice from "../EditInvoice";
import { handlError } from "src/utils/handlErrorUndefindDueDate/HandlError";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function InvoiceInfos({ dueDate }) {
  const [open, setOpen] = React.useState(false);
  const [clientFirstname, setClientFirstname] = useState("Elmahdi");
  const [clientLastname, setClientLastname] = useState("Amarjane");
  const [startDate, setCreationDate] = useState("");
  const [paymentDueDate, setDueDateDate] = useState("");
  const [dueDateStatus, setDueDateStatus] = useState("");
  const [principalAmount, setMontantCapital] = useState(0);
  const [interestAmount, setMontantInteret] = useState(0);
  const [insuranceAmount, setMontantAssurance] = useState(0);
  const [ancillaryCharge, setMontantAccessoire] = useState(0);
  const [latePaymentCharge, setPenaliteRetard] = useState(0);
  const [accruedInterest, setAccruedInterest] = useState(0);
  const [totalInstallmentAmount, setTotalInstallmentAmount] = useState(0);
  const [unpaidAncillaryCharges, setUnpaidAncillaryCharges] = useState(0);
  const [unpaidInsurancePrenium, setUnpaidInsurancePrenium] = useState(0);
  const [unpaidPrincipalAmount, setUnpaidPrincipalAmount] = useState(0);
  const [id, setId] = useState(0); // Assuming id is an integer
  const [modificationDate, setModificationDate] = useState(""); // Assuming modificationDate is a string
  const [remainingPrincipalBalance, setRemainingPrincipalBalance] = useState(0);
  const { dueDateId = "" } = useParams();
  // const [dueDate, setDueDate] = useState<DueDateInterface>(handlError);

  const initializeStateFromObject = (invoiceInfo: DueDateInterface) => {
    setCreationDate(invoiceInfo.startDate);
    setDueDateDate(invoiceInfo.paymentDueDate);
    setDueDateStatus(invoiceInfo.dueDateStatus);
    setMontantCapital(invoiceInfo.principalAmount);
    setMontantInteret(invoiceInfo.interestAmount);
    setMontantAssurance(invoiceInfo.insuranceAmount);
    setMontantAccessoire(invoiceInfo.ancillaryCharge);
    setPenaliteRetard(invoiceInfo.latePaymentCharge);
    setAccruedInterest(invoiceInfo.accruedInterest);
    setTotalInstallmentAmount(invoiceInfo.totalInstallmentAmount);
    setUnpaidAncillaryCharges(invoiceInfo.unpaidAncillaryCharges);
    setUnpaidInsurancePrenium(invoiceInfo.unpaidInsurancePrenium);
    setUnpaidPrincipalAmount(invoiceInfo.unpaidPrincipalAmount);
    //setId(invoiceInfo.id);
    setModificationDate(invoiceInfo.modificationDate);
    setRemainingPrincipalBalance(invoiceInfo.remainingPrincipalBalance);
    setClientFirstname(invoiceInfo._case.thirdParty.firstName);
    setClientLastname(invoiceInfo._case.thirdParty.lastName);
  };
  useEffect(() => {
    initializeStateFromObject(dueDate);
  }, [dueDate]);
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        marginTop: "30px",
        border: "1px solid rgba(9,9,9,0.31)",
        boxShadow: "-4px 2px 60px 15px rgba(9,9,9,0.31)",
        WebkitBoxShadow: "-4px 2px 60px 15px rgba(9,9,9,0.31)",
        MozBoxShadow: "-4px 2px 60px 15px rgba(9,9,9,0.31)",
        mb: 10,
      }}
    >
     <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
    <Tooltip title="Imprimer la facture">
      <IconButton color="inherit" size="large">
        <LocalPrintshopIcon sx={{ color: "none" }} fontSize="large" />
      </IconButton>
    </Tooltip>
  </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={12} alignItems="center">
          <Typography variant="h3" sx={{ mt: 1, textAlign: "center" }}>
            N°: #PAY00000001
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <TextField
            size="small"
            id="clientLastname"
            label="Nom Client"
            value={clientLastname + " " + clientFirstname}
            fullWidth
            disabled
            margin="normal"
            variant="standard"
            InputLabelProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            InputProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            size="small"
            id="creation-date"
            label="Date du création"
            value={formatDate(startDate)}
            InputLabelProps={{
              shrink: true,
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            fullWidth
            disabled
            margin="normal"
            variant="standard"
            InputProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            size="small"
            id="update-date"
            label="Date du modification"
            value={formatDate(modificationDate)}
            InputLabelProps={{
              shrink: true,
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            fullWidth
            disabled
            margin="normal"
            variant="standard"
            InputProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            size="small"
            id="duedate-date"
            label="Date d'écheance"
            disabled
            variant="standard"
            margin="normal"
            InputLabelProps={{
              shrink: true,
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            InputProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            fullWidth
            value={formatDateWithDifferentFormat(paymentDueDate)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            size="small"
            id="duedate-status"
            label="Statut d'écheance"
            margin="normal"
            InputLabelProps={{
              shrink: true,
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            InputProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            disabled
            fullWidth
            value={dueDateStatus}
            variant="standard"
          />
        </Grid>
        {/* AMOUNT INPUTS  */}
        <Grid item xs={4}>
          <TextField
            size="medium"
            margin="normal"
            id="montantCapital"
            label="Montant Capital"
            type="number"
            fullWidth
            variant="standard"
            disabled
            InputLabelProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            InputProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            value={principalAmount}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="montantInteret"
            label="Montant Interet"
            type="number"
            size="medium"
            margin="normal"
            fullWidth
            disabled
            variant="standard"
            InputLabelProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            InputProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            value={interestAmount}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="montantAssurance"
            label="Montant Assurance"
            type="number"
            size="medium"
            margin="normal"
            fullWidth
            variant="standard"
            disabled
            InputLabelProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            InputProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            value={insuranceAmount}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="montantAccessoire"
            label="Montant Accessoire"
            type="number"
            fullWidth
            variant="standard"
            size="medium"
            margin="normal"
            disabled
            InputLabelProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            InputProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            value={ancillaryCharge}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="penaliteRetard"
            label="Pénalité de retard"
            type="number"
            fullWidth
            variant="standard"
            size="medium"
            margin="normal"
            disabled
            InputLabelProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            InputProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            value={latePaymentCharge}
          />
        </Grid>
        {/* COPY GRID TEST Start*/}
        <Grid item xs={4}>
          <TextField
            size="medium"
            margin="normal"
            id="montantCapital"
            label="Montant Capital"
            type="number"
            fullWidth
            variant="standard"
            disabled
            InputLabelProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            InputProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            value={principalAmount}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="montantInteret"
            label="Montant Interet"
            type="number"
            size="medium"
            margin="normal"
            fullWidth
            disabled
            variant="standard"
            InputLabelProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            InputProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            value={interestAmount}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="montantAssurance"
            label="Montant Assurance"
            type="number"
            size="medium"
            margin="normal"
            fullWidth
            variant="standard"
            disabled
            InputLabelProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            InputProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            value={insuranceAmount}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="montantAccessoire"
            label="Montant Accessoire"
            type="number"
            fullWidth
            variant="standard"
            size="medium"
            margin="normal"
            disabled
            InputLabelProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            InputProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            value={ancillaryCharge}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            id="penaliteRetard"
            label="Pénalité de retard"
            type="number"
            fullWidth
            variant="standard"
            size="medium"
            margin="normal"
            disabled
            InputLabelProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            InputProps={{
              style: { fontWeight: "bold", fontSize: "20px", color: "black" },
            }}
            value={latePaymentCharge}
          />
        </Grid>
        {/* COPY GRID TEST fin*/}
      </Grid>
    </Container>
  );
}
