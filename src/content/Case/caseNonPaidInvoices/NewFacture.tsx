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
import { Divider, Tooltip } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Autocomplete from "@mui/material/Autocomplete";
//
import {getCurrentDate,getCurrentDateTime} from "../../../utils/CurrentDateTime"
import { useState } from "react";
import { createNewDueDate } from "src/utils/api/dueDate/DueDateApi";
import { getFilteredCasesByCaseId } from "src/utils/api/case/caseApiCall";
import {Case} from "../../../models/case";
import { DueDate } from "src/models/DueDate";
//

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
interface NewFacture{
    caseId:string;
    id:string;
}

export default function NewFacture({caseId,id}:NewFacture) {
  const [open, setOpen] = React.useState(false);

   // Créez des états pour chaque champ de saisie
   const [clientFirstname, setClientFirstname] = useState('Elmahdi');
   const [clientLastname, setClientLastname] = useState('Amarjane');
   const [startDate, setCreationDate] = useState(getCurrentDateTime());
   const [paymentDueDate, setDueDateDate] = useState('');
   const [dueDateStatus, setDueDateStatus] = useState('');
   const [principalAmount, setMontantCapital] = useState(0);
   const [interestAmount, setMontantInteret] = useState(0);
   const [insuranceAmount, setMontantAssurance] = useState(0);
   const [ancillaryCharge, setMontantAccessoire] = useState(0);
   const [latePaymentCharge, setPenaliteRetard] = useState(0);
  // const [envoyerNotification, setEnvoyerNotification] = useState(false);
 // const [cases, setCases] = useState([]);
  const [caseInfo, setCaseInfo] = useState<Case[]>([]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const PaymentMethods = [
    { label: "CASH" },
    "LCN",
    "CERTIFIED_CHECK",
    "BANK_TRANSFER",

  ];

  const paymentChannels = [
    "Canal1",
    "Canal2",
    "Canal3",
    "Canal4"
  ];
 // let result=Case[1];
  const getCaseInfo = async (caseId:string)=>{
    const userId=7;
    try {
     let  result = await getFilteredCasesByCaseId(userId,caseId);
       setCaseInfo(result)
       console.log("caseinfo new facture: ",caseInfo)
    } catch (error) {
       console.log("erro fitching data new invoice:",error);
    }
 

  }
  React.useEffect(()=>{
          getCaseInfo(caseId);
    
       
  },[])
  React.useEffect(() => {
    if (caseInfo.length > 0) {
        setClientFirstname(caseInfo[0].thirdParty.firstName);
        setClientLastname(caseInfo[0].thirdParty.lastName);
    }
}, [caseInfo]);



  const handleSave = () => {
    const formData: DueDate = {
        id: 0, // Valeur par défaut pour l'identifiant
        dueDateId: "", // Valeur par défaut pour l'identifiant de la date d'échéance
        startDate: startDate,
        paymentDueDate: paymentDueDate,
        dueDateStatus: dueDateStatus,
        principalAmount: principalAmount,
        interestAmount: interestAmount,
        insuranceAmount: insuranceAmount,
        ancillaryCharge: ancillaryCharge,
        latePaymentCharge: latePaymentCharge,
        remainingPrincipalBalance: 0, // Valeur par défaut pour le solde principal restant
        modificationDate: "", // Valeur par défaut pour la date de modification
        totalInstallmentAmount: 0, // Valeur par défaut pour le montant total de l'échéance
        unpaidPrincipalAmount: 0, // Valeur par défaut pour le montant du capital impayé
        accruedInterest: 0, // Valeur par défaut pour le montant des intérêts impayés
        unpaidInsurancePrenium: 0, // Valeur par défaut pour le montant de l'assurance impayée
        unpaidAncillaryCharges: 0, // Valeur par défaut pour le montant des accessoires impayés
        _case: {
          id:parseInt(id)
        },
      };
      
    console.log(formData)
    createNewDueDate(formData);
    
}

  return (
    <React.Fragment>
      <Tooltip arrow title="Créer Nouvelle Facture">
        {/* <IconButton onClick={handleClickOpen} size="large">
          <AddIcon sx={{ color: "green" }} fontSize="small" />
        </IconButton> */}
           <Button size="small" sx={{color:"green"}} startIcon={<AddIcon />} onClick={handleClickOpen} variant="text">
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
        <span style={{ color: 'blue' }}> #{caseId}</span>
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
        {/* -------------------------------------- */}
        
        <DialogContent dividers>
          <Grid container spacing={3}>
          <Grid item xs={6}>
              <TextField
                size="small"
                id="clientFirstname"
                label="Prénom Client"
                defaultValue={clientFirstname}
                fullWidth
                onChange={(e) => setClientFirstname(clientFirstname)}

              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                id="clientLastname"
                label="Nom Client"
                defaultValue={clientLastname}
                fullWidth
                //il faut remplire ce champs avec autre maniere
                onChange={(e) => setClientLastname(clientLastname)}

              />
            </Grid>

            <Grid item xs={4}>
              <TextField
                size="small"
                id="creation-date"
                label="Date du création"
                //type="date"
                value={getCurrentDate()}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
                onChange={(e) => setCreationDate(getCurrentDateTime())}

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
                onChange={(e) => setDueDateDate(e.target.value)}
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
                    style: { fontWeight: 'bold', fontSize: '13px' }, // style for label
                  }}
                  InputProps={{
                    style: { fontWeight: 'bold', fontSize: '14px' }, // style for input text
                  }}
                  onChange={(e) => setMontantCapital(parseFloat( e.target.value))}
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
                    style: { fontWeight: 'bold', fontSize: '14px' }, // style for input text
                  }}
                  onChange={(e) => setMontantInteret(parseFloat( e.target.value))}

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
                    style: { fontWeight: 'bold', fontSize: '14px' }, // style for input text
                  }}
                  onChange={(e) => setMontantAssurance(parseFloat( e.target.value))}

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
                    style: { fontWeight: 'bold', fontSize: '14px' }, // style for input text
                  }}
                  onChange={(e) => setMontantAccessoire(parseFloat( e.target.value))}

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
                    style: { fontWeight: 'bold', fontSize: '14px' }, // style for input text
                  }}
                  onChange={(e) => setPenaliteRetard(parseFloat( e.target.value))}

              />
            </Grid>
            {/* Repeat similar Grid items for other fields */}
            {/* <Grid item xs={6}>
              <TextField
                size="small"
                id="creation-date"
                label="Date de création"
                type="date"
                defaultValue={new Date().toISOString().slice(0, 10)}
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                size="small"
                id="due-date"
                label="Date d'échéance"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                fullWidth
              />
            </Grid> */}
            <Grid item xs={6}>
              <Autocomplete
                size="small"
                disablePortal
                id="combo-box-demo"
                options={PaymentMethods}
                // sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Methode de paiement" id="paymentMethod" />
                )}
                

              />
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                size="small"
                disablePortal
                id="combo-box-demo"
                options={paymentChannels}
                // sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="canal de paiement"
                    id="paymentChannel"
                  />
                )}
              />
            </Grid>
            {/* <Grid item xs={12}>
              <Autocomplete
                size="small"
                disablePortal
                id="combo-box-demo"
                options={profiles}
                // sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="profile" id="profile" />
                )}
              />
            </Grid> */}

            {/* <Grid item xs={12}>
              <TextField
                size="small"
                id="Objet"
                label="Objet"
                defaultValue=""
                fullWidth
              />
            </Grid> */}
            {/* ...other fields... */}
            {/* <Grid item xs={12}>
              <TextField
                size="small"
                id="description"
                label="Description"
                multiline
                rows={4}
                fullWidth
              />
            </Grid> */}

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox  />}
                label="Envoyer notification"
              />
            </Grid>
          </Grid>
        </DialogContent>
        

        {/* -------------------------------------- */}

        <DialogActions>
          
          <Button autoFocus variant="contained" onClick={()=>handleSave()}>
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
