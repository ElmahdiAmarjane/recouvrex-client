
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Link, Tooltip, useTheme } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import NewFacture from "./NewInvoice";
import { deleteDueDateById, getDueDatesByCaseId } from "src/utils/api/dueDate/DueDateApi";
import { useEffect, useState } from "react";
import { DueDate, DueDateInterface } from '../../../models/DueDate';
import EditInvoice from "./EditInvoice";
import Alert from "@mui/material/Alert";
import AlertDialog from "./AlertDialog";
import { encryptArg } from "src/utils/cryptageFunctions/Encrypt";
interface InvoicesTableProps {
  caseId: string;
  id: string;
  dueDate:DueDateInterface;
}

export default function InvoicesTable({ caseId, id }: InvoicesTableProps) {
  const theme = useTheme();
  const [dueDates, setDueDates] = useState<DueDateInterface[]>([]);
  const [isNewFactOpen, setIsNewFactOpen] = useState(true);
  const [succesDelete, setSuccesDelete] = useState(false);
  const [faildDelete, setfaildDelete] = useState(false);
  const [alertDialogOpen, setAlertDialogOpen] = useState(false);
  const [idDueDateToDelete, setIdDueDateToDelete] = useState(0);
  const getDueDatesInfo = async (id: number) => {
    try {
      const result = await getDueDatesByCaseId(id);
      setDueDates(result);
      setIsNewFactOpen(true)
    } catch (error) {
      console.log("error fetching data invoices:", error);
    }
  };

  useEffect(() => {
    getDueDatesInfo(parseInt(id));
    
  }, [isNewFactOpen]);

  const deleteDueDate = async (idDueDate: number) => {
    console.log("id to delete invoice : ",idDueDate)
    try {
      const result = await deleteDueDateById(idDueDate); 
      setAlertDialogOpen(false);
      setSuccesDelete(true);
      console.log(result);
      setTimeout(() => {
        setSuccesDelete(false);
      }, 1000);
    
      getDueDatesInfo(parseInt(id));
    } catch (error) {
      console.log("error deleting due_date:", error);
      setfaildDelete(true);
      setTimeout(() => {
        setfaildDelete(false);
      }, 2000);
    }
  };
  


  function storeDueDateId() {
       localStorage.setItem("caseId",encryptArg(id))
  }
  useEffect(()=>{
      storeDueDateId();
  },[])

  return (
    <TableContainer component={Paper} style={{ position: 'relative' }}>
    {succesDelete && (
      <Alert variant="filled" severity="success" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 999 }}>
        La facture a été supprimée avec succès.
      </Alert>
    )}
    {faildDelete && (
      <Alert variant="filled" severity="error" sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 999 }}>
        Erreur lors de la suppression de la facture.
      </Alert>
    )}
       
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>IDENTIFIANT</TableCell>
            <TableCell align="left">MONTANT</TableCell>
            <TableCell align="left">DATE DE CREATION</TableCell>
            <TableCell align="left">DATE DE PAIEMENT</TableCell>
            <TableCell align="left">STATUS DE PAIEMENT</TableCell>
            <TableCell align="right">
              <NewFacture caseId={caseId} id={id} setIsNewFactOpen={setIsNewFactOpen}/>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dueDates.map((dueDate) => (
            <TableRow
              key={dueDate.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
     
              <TableCell component="th" scope="row">
                <Link href={`/invoice/${dueDate.dueDateId}`} rel="noopener noreferrer">
                  {dueDate.dueDateId}
                </Link>
               
              
        <AlertDialog 
             isOpen={alertDialogOpen}
              setAlertDialogOpen={setAlertDialogOpen}
              deleteDueDate={deleteDueDate} 
              dueDateId={idDueDateToDelete}
         />
         
              </TableCell>
              <TableCell align="left">{dueDate.principalAmount} </TableCell>
              <TableCell align="left">{dueDate.startDate ? dueDate.startDate.split("T", 1)[0] : ""}</TableCell>
              <TableCell align="left">{dueDate.paymentDueDate}</TableCell>
              <TableCell align="left">{dueDate.dueDateStatus}</TableCell>
              <TableCell align="right">
                <Tooltip title="Edit Order" arrow>
                  {/* <IconButton
                    sx={{
                      "&:hover": { background: theme.colors.error.lighter },
                      color: theme.palette.error.main,
                    }}
                    color="inherit"
                    size="small"
                  >
                    <FileCopyIcon sx={{ color: "blue" }} fontSize="small" />
                  </IconButton>
                  */}
              <EditInvoice check={false} dueDate={dueDate} caseId={caseId} id={id} setIsNewFactOpen={setIsNewFactOpen}/>
           
                </Tooltip>
                <Tooltip title="Delete Order" arrow>
                  <IconButton
                    sx={{
                      "&:hover": { background: theme.colors.error.lighter },
                      color: theme.palette.error.main,
                    }}
                    color="inherit"
                    size="small"
                    // onClick={()=>{deleteDueDate(dueDate.id)}}
                     onClick={()=>{setAlertDialogOpen(true);setIdDueDateToDelete(dueDate.id)}}
                  >
                    <CloseIcon sx={{ color: "red" }} fontSize="small" />
                  </IconButton>
                </Tooltip>

              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
