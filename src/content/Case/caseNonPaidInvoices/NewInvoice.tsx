import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Tooltip } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Autocomplete from "@mui/material/Autocomplete";
import {
  getCurrentDate,
  getCurrentDateTime,
} from "../../../utils/formatDate/CurrentDateTime";
import { useState, useEffect } from "react";
import { createNewDueDate } from "src/utils/api/dueDate/DueDateApi";
import { getFilteredCasesByCaseId } from "src/utils/api/case/caseApiCall";
import { Case } from "../../../models/case";
import { DueDate } from "src/models/DueDate";
import Alert from "@mui/material/Alert";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function NewFacture({ caseId, id, setIsNewFactOpen }) {
  const [open, setOpen] = React.useState(false);
  const [clientFirstname, setClientFirstname] = useState("Elmahdi");
  const [clientLastname, setClientLastname] = useState("Amarjane");
  const [startDate, setCreationDate] = useState(getCurrentDateTime());
  const [paymentDueDate, setDueDateDate] = useState("");
  const [dueDateStatus, setDueDateStatus] = useState("");
  const [principalAmount, setMontantCapital] = useState(0);
  const [interestAmount, setMontantInteret] = useState(0);
  const [insuranceAmount, setMontantAssurance] = useState(0);
  const [ancillaryCharge, setMontantAccessoire] = useState(0);
  const [latePaymentCharge, setPenaliteRetard] = useState(0);
  const [paymentDueDateError, setPaymentDueDateError] = useState(false);
  const [principalAmountError, setPrincipalAmountError] = useState(false);
  const [interestAmountError, setInterestAmountError] = useState(false);
  const [insuranceAmountError, setInsuranceAmountError] = useState(false);
  const [ancillaryChargeError, setAncillaryChargeError] = useState(false);
  const [latePaymentChargeError, setLatePaymentChargeError] = useState(false);
  const [caseInfo, setCaseInfo] = useState<Case[]>([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getCaseInfo(caseId);
  }, [caseId]);

  useEffect(() => {
    if (caseInfo.length > 0) {
      setClientFirstname(caseInfo[0].thirdParty.firstName);
      setClientLastname(caseInfo[0].thirdParty.lastName);
    }
  }, [caseInfo]);

  const getCaseInfo = async (caseId) => {
    const userId = 7;
    try {
      const result = await getFilteredCasesByCaseId(userId, caseId);
      setCaseInfo(result);
    } catch (error) {
      console.log("Error fetching case info:", error);
    }
  };
  const resetFields = () => {
    setDueDateDate("");
    setDueDateStatus("");
    setMontantCapital(0);
    setMontantInteret(0);
    setMontantAssurance(0);
    setMontantAccessoire(0);
    setPenaliteRetard(0);
    // Reset error states
    setPaymentDueDateError(false);
    setPrincipalAmountError(false);
    setInterestAmountError(false);
    setInsuranceAmountError(false);
    setAncillaryChargeError(false);
    setLatePaymentChargeError(false);
  };
  const formData: DueDate = {
    id: 0,
    dueDateId: "",
    startDate: startDate,
    paymentDueDate: paymentDueDate,
    dueDateStatus: dueDateStatus,
    principalAmount: principalAmount,
    interestAmount: interestAmount,
    insuranceAmount: insuranceAmount,
    ancillaryCharge: ancillaryCharge,
    latePaymentCharge: latePaymentCharge,
    remainingPrincipalBalance: 0,
    modificationDate: "",
    totalInstallmentAmount: 0,
    unpaidPrincipalAmount: 0,
    accruedInterest: 0,
    unpaidInsurancePrenium: 0,
    unpaidAncillaryCharges: 0,
    _case: {
      id: parseInt(id),
    },
  };
  const handleSave = async () => {
    if (paymentDueDate == "") {
      setPaymentDueDateError(true);
      setErrorMessage("Erreur lors de la création de la facture.");
      return null;
    }
    try {
      await createNewDueDate(formData);
      setSuccessMessage("La nouvelle facture a été créée avec succès!");
      setErrorMessage("");
      setTimeout(() => {
        setOpen(false);
        setSuccessMessage("");
        setErrorMessage("");
      }, 2000);
      resetFields(); // to reset fields values
      setIsNewFactOpen(false);
    } catch (error) {
      console.log("Error saving due date:", error);
      setSuccessMessage("");
      setErrorMessage("Erreur lors de la création de la facture.");
    }
  };

  const handleClose = () => {
    resetFields();
    setOpen(false);
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const PaymentMethods = [
    { label: "CASH" },
    "LCN",
    "CERTIFIED_CHECK",
    "BANK_TRANSFER",
  ];

  const paymentChannels = ["Canal1", "Canal2", "Canal3", "Canal4"];

  return (
    <React.Fragment>
      <Tooltip arrow title="Créer Nouvelle Facture">
        <Button
          size="small"
          sx={{ color: "green" }}
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
          variant="text"
        >
          Ajouter
        </Button>
      </Tooltip>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="md"
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <Typography variant="h3">
            Créer Nouvelle Facture pour case
            <span style={{ color: "blue" }}> #{caseId}</span>
          </Typography>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                size="small"
                id="clientFirstname"
                label="Prénom Client"
                value={clientFirstname}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                id="clientLastname"
                label="Nom Client"
                value={clientLastname}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                size="small"
                id="creation-date"
                label="Date du création"
                value={getCurrentDate()}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                disabled
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                size="small"
                id="duedate-date"
                label="Date d'écheance"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                value={paymentDueDate}
                onChange={(e) => {
                  const selectedDate = e.target.value;
                  setDueDateDate(selectedDate);
                  setPaymentDueDateError(!selectedDate); // Check if the selected date is empty
                }}
                error={paymentDueDateError}
                helperText={
                  paymentDueDateError ? "La date d'échéance est requise" : ""
                }
              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                size="small"
                id="duedate-status"
                label="Statut d'écheance"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                value={dueDateStatus}
                onChange={(e) => setDueDateStatus(e.target.value)}
              />
            </Grid>
            {/* AMOUNT INPUTS  */}
            <Grid item xs={4}>
              <TextField
                size="small"
                id="montantCapital"
                label="Montant Capital"
                type="number"
                fullWidth
                InputLabelProps={{
                  style: { fontWeight: "bold", fontSize: "13px" },
                }}
                InputProps={{
                  style: { fontWeight: "bold", fontSize: "14px" },
                }}
                value={principalAmount}
                onChange={(e) => {
                  setMontantCapital(parseFloat(e.target.value));
                  setPrincipalAmountError(e.target.value === "");
                }}
                error={principalAmountError}
                helperText={
                  principalAmountError ? "Montant Capital est requis" : ""
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                size="small"
                id="montantInteret"
                label="Montant Interet"
                type="number"
                fullWidth
                InputProps={{
                  style: { fontWeight: "bold", fontSize: "14px" },
                }}
                value={interestAmount}
                onChange={(e) => {
                  setMontantInteret(parseFloat(e.target.value));
                  setInterestAmountError(e.target.value === "");
                }}
                error={interestAmountError}
                helperText={
                  interestAmountError ? "Montant Intérêt est requis" : ""
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                size="small"
                id="montantAssurance"
                label="Montant Assurance"
                type="number"
                fullWidth
                InputProps={{
                  style: { fontWeight: "bold", fontSize: "14px" },
                }}
                value={insuranceAmount}
                onChange={(e) => {
                  setMontantAssurance(parseFloat(e.target.value));
                  setInsuranceAmountError(e.target.value === "");
                }}
                error={insuranceAmountError}
                helperText={
                  insuranceAmountError ? "Montant Assurance est requis" : ""
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                size="small"
                id="montantAccessoire"
                label="Montant Accessoire"
                type="number"
                fullWidth
                InputProps={{
                  style: { fontWeight: "bold", fontSize: "14px" },
                }}
                value={ancillaryCharge}
                onChange={(e) => {
                  setMontantAccessoire(parseFloat(e.target.value));
                  setAncillaryChargeError(e.target.value === "");
                }}
                error={ancillaryChargeError}
                helperText={
                  ancillaryChargeError ? "Montant Accessoire est requis" : ""
                }
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                size="small"
                id="penaliteRetard"
                label="Pénalité de retard"
                type="number"
                fullWidth
                InputProps={{
                  style: { fontWeight: "bold", fontSize: "14px" },
                }}
                value={latePaymentCharge}
                onChange={(e) => {
                  setPenaliteRetard(parseFloat(e.target.value));
                  setLatePaymentChargeError(e.target.value === "");
                }}
                error={latePaymentChargeError}
                helperText={
                  latePaymentChargeError ? "Pénalité de retard est requise" : ""
                }
              />
            </Grid>

            <Grid item xs={6}>
              <Autocomplete
                size="small"
                disablePortal
                id="combo-box-demo"
                options={PaymentMethods}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Methode de paiement"
                    id="paymentMethod"
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                size="small"
                disablePortal
                id="combo-box-demo"
                options={paymentChannels}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="canal de paiement"
                    id="paymentChannel"
                  />
                )}
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox />}
                label="Envoyer notification"
              />
            </Grid>
          </Grid>
          {successMessage && (
            <Alert
              variant="filled"
              severity="success"
              sx={{ width: "500px", margin: "auto" }}
            >
              {successMessage}
            </Alert>
          )}
          {errorMessage && (
            <Alert
              variant="filled"
              severity="error"
              sx={{ width: "500px", margin: "auto" }}
            >
              {errorMessage}
            </Alert>
          )}
        </DialogContent>

        <DialogActions>
          <Button autoFocus variant="contained" onClick={handleSave}>
            Enregistrer
          </Button>
          <Button autoFocus onClick={handleClose}>
            Fermer
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}
