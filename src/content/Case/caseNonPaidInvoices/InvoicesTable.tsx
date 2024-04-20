import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton, Link, Tooltip, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import FileCopyIcon from "@mui/icons-material/FileCopy";

import NewFacture from "./NewFacture";
import { getDueDatesByCaseId } from "src/utils/api/dueDate/DueDateApi";
import { useEffect, useState } from "react";
import { DueDateInterface } from '../../../models/DueDate';

interface InvoicesTableProps {
  caseId: string;
  id: string;
}

export default function InvoicesTable({ caseId, id }: InvoicesTableProps) {
  const theme = useTheme();
  const [dueDates, setDueDates] = useState<DueDateInterface[]>([]);

  const getDueDatesInfo = async (id: number) => {
    try {
      const result = await getDueDatesByCaseId(id);
      setDueDates(result);
    } catch (error) {
      console.log("error fetching data invoices:", error);
    }
  };

  useEffect(() => {
    getDueDatesInfo(parseInt(id));
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>IDENTIFIANT</TableCell>
            <TableCell align="left">MONTANT</TableCell>
            <TableCell align="left">DATE DE IMPAYÉ</TableCell>
            <TableCell align="left">DATE DE PAIEMENT</TableCell>
            <TableCell align="right">
              <NewFacture caseId={caseId} id={id} />
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
                <Link href={`/case`} rel="noopener noreferrer">
                  {dueDate.dueDateId}
                </Link>
              </TableCell>
              <TableCell align="left">
                <Link href={`/case`} rel="noopener noreferrer">
                  {dueDate.principalAmount}
                </Link>
              </TableCell>
              <TableCell align="left">
                <Link href={`/case`} rel="noopener noreferrer">
                  {dueDate.startDate.split("T",1)}
                </Link>
              </TableCell>
              <TableCell align="left">{dueDate.dueDateStatus}</TableCell>
              <TableCell align="right">
                <Tooltip title="Edit Order" arrow>
                  <IconButton
                    sx={{
                      "&:hover": { background: theme.colors.error.lighter },
                      color: theme.palette.error.main,
                    }}
                    color="inherit"
                    size="small"
                  >
                    <FileCopyIcon sx={{ color: "blue" }} fontSize="small" />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete Order" arrow>
                  <IconButton
                    sx={{
                      "&:hover": { background: theme.colors.error.lighter },
                      color: theme.palette.error.main,
                    }}
                    color="inherit"
                    size="small"
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
