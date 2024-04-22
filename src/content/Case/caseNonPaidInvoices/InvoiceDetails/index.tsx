import { Helmet } from "react-helmet-async";
import {
  Grid,
  Container,
  Typography,
  Stack,
  Button,
  Card,
  Tooltip,
  IconButton,
  Alert,
  useTheme,
} from "@mui/material";

import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import InvoiceInfos from "./InvoiceInfos";
import DeleteIcon from "@mui/icons-material/Delete";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { decryptArg } from "src/utils/cryptageFunctions/Decrypt";
import {
  deleteDueDateById,
  getDueDatesByCaseIdAndDueDateId,
} from "src/utils/api/dueDate/DueDateApi";
import { useParams } from "react-router-dom";
import { DueDateInterface } from "src/models/DueDate";
import { handlError } from "src/utils/handlErrorUndefindDueDate/HandlError";
import { useEffect, useState } from "react";
import EditInvoice from "../EditInvoice";
import AlertDialog from "../AlertDialog";
import { useNavigate } from "react-router-dom";
//import InvoiceInfos from "./InvoiceInfos";
import LocalPrintshopIcon from "@mui/icons-material/LocalPrintshop";

function InvoiceDetails() {
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [succesDelete, setSuccesDelete] = useState(false);
  const [faildDelete, setfaildDelete] = useState(false);
  const [dueDate, setDueDate] = useState<DueDateInterface>(handlError);
  const { dueDateId = "" } = useParams();
  const navigate = useNavigate();
  const [isNewFactOpen, setIsNewFactOpen] = useState(true);
  const themeTable = useTheme();
  const getInvoiceInfo = async () => {
    let caseId: any = localStorage.getItem("caseId");
    caseId = decryptArg(caseId);
    try {
      const result = await getDueDatesByCaseIdAndDueDateId(caseId, dueDateId);
      // initializeStateFromObject(result);
      setDueDate(result);
      console.log(result);
    } catch (error) {
      console.log("error fetching info due_date:", error);
    }
  };

  useEffect(() => {
    getInvoiceInfo();
  }, []);
  //////////////////:::::
  useEffect(() => {
    getInvoiceInfo();
  }, [isNewFactOpen]);

  const deleteDueDate = async (idDueDate: number) => {
    console.log("id to delete invoice : ", idDueDate);

    try {
      const result = await deleteDueDateById(idDueDate);
      setAlertDialogOpen(false);
      setSuccesDelete(true);
      console.log(result);
      setTimeout(() => {
        setSuccesDelete(false);
        navigate(`/case/${dueDate._case.caseId}/${dueDate._case.id}`);
      }, 1000);
    } catch (error) {
      console.log("error deleting due_date:", error);
      setfaildDelete(true);
      setTimeout(() => {
        setfaildDelete(false);
      }, 2000);
    }
  };

  //////////////////:::::
  return (
    <>
      {/* <Helmet>
        <title>| La Facture</title>
      </Helmet> */}
      {/* <PageTitleWrapper>
        <PageHeader />there is not header for the task tell now
      </PageTitleWrapper> */}
      <Card>
        <Container maxWidth="lg" sx={{ mt: 2 }}>
          {succesDelete && (
            <Alert
              variant="filled"
              severity="success"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "50%",
                zIndex: 999,
              }}
            >
              La facture a été supprimée avec succès.
            </Alert>
          )}
          {faildDelete && (
            <Alert
              variant="filled"
              severity="error"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "50%",
                zIndex: 999,
              }}
            >
              Erreur lors de la suppression de la facture.
            </Alert>
          )}

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="stretch"
            spacing={1}
          >
            <Grid
              item
              xs={6}
              lg={8}
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h3" sx={{ mt: 1, ml: 1 }}>
                La Facture #PAY00000001
              </Typography>
            </Grid>
            <Grid item lg={4} xs={6}>
              <EditInvoice
                check={true}
                dueDate={dueDate}
                caseId={dueDate._case.caseId}
                id={dueDate._case.id.toString()}
                setIsNewFactOpen={setIsNewFactOpen}
              />

              <Button
                size="small"
                rel="noopener noreferrer"
                variant="contained"
                sx={{ mt: 1, marginLeft: "10px" }}
                startIcon={<DeleteIcon fontSize="small" />}
                onClick={() => {
                  setAlertDialogOpen(true);
                }}
              >
                Supprimer la facture
              </Button>
            
            </Grid>

            <InvoiceInfos dueDate={dueDate} />
          </Grid>

          <AlertDialog
            isOpen={alertDialogOpen}
            setAlertDialogOpen={setAlertDialogOpen}
            deleteDueDate={deleteDueDate}
            dueDateId={dueDate.id}
          />
        </Container>
      </Card>
    </>
  );
}

export default InvoiceDetails;
