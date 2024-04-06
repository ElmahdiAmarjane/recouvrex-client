import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "@mui/material";

function createData(
  personne: string,
  contrat: string,
  facture: string,
  paiement: string
) {
  return { personne, contrat, facture, paiement };
}

const rows = [
  createData("IND00000553", "MICOC000368", "0000149", "00000720"),
];

export default function ReferencesTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Personne</TableCell>
            <TableCell align="left">Contrat</TableCell>
            <TableCell align="left">Facture</TableCell>
            <TableCell align="left">Paiement</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.personne}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link href={`/case`} rel="noopener noreferrer">
                  {row.personne}
                </Link>
              </TableCell>
              <TableCell align="left">
                <Link href={`/case`} rel="noopener noreferrer">
                  {row.contrat}
                </Link>
              </TableCell>
              <TableCell align="left">
                <Link href={`/case`} rel="noopener noreferrer">
                  {row.facture}
                </Link>
              </TableCell>
              <TableCell align="left">{row.paiement}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
