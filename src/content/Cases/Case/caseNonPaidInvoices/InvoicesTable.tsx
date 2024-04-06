import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, IconButton, Link, Tooltip, Typography, useTheme } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from "@mui/icons-material/Close";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    container: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      textTransform: 'lowercase',
       // Align items vertically in the center
 // Adjust the space between icon and text
    },
  });


function createData(
  personne: string,
  contrat: string,
  facture: string,
  paiement: string
) {
  return { personne, contrat, facture, paiement };
}

const rows = [createData("IND00000553", "MICOC000368", "0000149", "00000720")];

export default function InvoicesTable() {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>IDENTIFIANT</TableCell>
            <TableCell align="left">MONTANT</TableCell>
            <TableCell align="left">DATE DE IMPAYÉ</TableCell>
            <TableCell align="left">DATE DE PAIEMENT</TableCell>
            <TableCell align="right" sx={{ color: "green" }} >
            <Box className={classes.container}>
              <AddIcon  fontSize="small" />
              <Typography variant="body2">
                ajouter
              </Typography>
              </Box>
            </TableCell>
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
              <TableCell align="right">
                {/* the button or icon for editing */}
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

                {/* the button for deleting */}
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
