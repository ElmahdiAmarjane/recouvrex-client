import { FC, ChangeEvent, useState } from "react";
import { format } from "date-fns";
import numeral from "numeral";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import SyncIcon from "@mui/icons-material/Sync";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PropTypes from "prop-types";
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  useTheme,
  CardHeader,
  Grid,
  Button,
  Stack,
  Link,
} from "@mui/material";

import Label from "src/components/Label";
import { CryptoOrder, CryptoOrderStatus } from "src/models/crypto_order";
import { Case, CaseStatus } from "src/models/case";
// import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
// import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import BulkActions from "./BulkActions";
import CasesSearch from "./CasesSearch";

interface CasesTableProps {
  className?: string;
  cryptoOrders: CryptoOrder[];
}

interface Filters {
  status?: CryptoOrderStatus;
}

const getStatusLabel = (caseStatus: CaseStatus): JSX.Element => {
  // const map = {
  //   failed: {
  //     text: "Failed",
  //     color: "error",
  //   },
  //   completed: {
  //     text: "Completed",
  //     color: "success",
  //   },
  //   pending: {
  //     text: "Pending",
  //     color: "warning",
  //   },
  // };

  console.log(caseStatus + "\n");

  const caseStatusMap = {
    Précontentieux: {
      text: "Précontentieux",
      color: "warning",
    },
    "Pré-contentieux": {
      text: "Pré-contentieux",
      color: "warning",
    },
    Radié: {
      text: "Radié",
      color: "error",
    },
    "Prêt douteux": {
      text: "Prêt douteux",
      color: "error",
    },
    Terminé: {
      text: "Terminé",
      color: "success",
    },
    "Saisie conservatoire immobilière initiée": {
      text: "Saisie conservatoire immobilière initiée",
      color: "info",
    },
    "Comité des impayés": {
      text: "Comité des impayés",
      color: "info",
    },
    "Pré-douteux": {
      text: "Pré-douteux",
      color: "warning",
    },
    Douteux: {
      text: "Douteux",
      color: "error",
    },
    "Comité de déclassement agence": {
      text: "Comité de déclassement agence",
      color: "info",
    },
    Contentieux: {
      text: "Contentieux",
      color: "error",
    },
    "Saisie conservation immobilière initiée": {
      // This appears similar to "Saisie conservatoire immobilière initiée", adjusted for consistency
      text: "Saisie conservation immobilière initiée",
      color: "info",
    },
  };

  const { text, color }: any = caseStatusMap[caseStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (
  cryptoOrders: CryptoOrder[],
  filters: Filters
): CryptoOrder[] => {
  return cryptoOrders.filter((cryptoOrder) => {
    let matches = true;

    if (filters.status && cryptoOrder.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  cryptoOrders: Case[],
  page: number,
  limit: number
): Case[] => {
  return cryptoOrders.slice(page * limit, page * limit + limit);
};

const CasesTable: FC<CasesTableProps> = ({ cryptoOrders }) => {
  const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
    []
  );
  const selectedBulkActions = selectedCryptoOrders.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null,
  });

  const statusOptions = [
    {
      id: "all",
      name: "All",
    },
    {
      id: "completed",
      name: "Completed",
    },
    {
      id: "pending",
      name: "Pending",
    },
    {
      id: "failed",
      name: "Failed",
    },
  ];

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== "all") {
      value = e.target.value;
    }

    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value,
    }));
  };

  const handleSelectAllCryptoOrders = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedCryptoOrders(
      event.target.checked
        ? cryptoOrders.map((cryptoOrder) => cryptoOrder.id)
        : []
    );
  };

  const handleSelectOneCryptoOrder = (
    event: ChangeEvent<HTMLInputElement>,
    cryptoOrderId: string
  ): void => {
    if (!selectedCryptoOrders.includes(cryptoOrderId)) {
      setSelectedCryptoOrders((prevSelected) => [
        ...prevSelected,
        cryptoOrderId,
      ]);
    } else {
      setSelectedCryptoOrders((prevSelected) =>
        prevSelected.filter((id) => id !== cryptoOrderId)
      );
    }
  };

  const formatNumberWithPrefix = (number, prefix = "COL", totalLength = 9) => {
    // Calculate how many zeros we need to add after the prefix
    const zerosNeeded = totalLength - prefix.length - number.toString().length;
    // Create a string with the required zeros
    const zeros = "0".repeat(zerosNeeded);
    // Return the formatted string
    return `${prefix}${zeros}${number}`;
  };

  const handlePageChange = (event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredCryptoOrders = applyFilters(cryptoOrders, filters);
  const paginatedCryptoOrders = applyPagination(
    filteredCryptoOrders,
    page,
    limit
  );
  const selectedSomeCryptoOrders =
    selectedCryptoOrders.length > 0 &&
    selectedCryptoOrders.length < cryptoOrders.length;
  const selectedAllCryptoOrders =
    selectedCryptoOrders.length === cryptoOrders.length;
  // const theme = useTheme();

  return (
    <Card>
      {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )}
      {!selectedBulkActions && (
        <>
          {/* <CardHeader
        sx={{mb:0,pb:0}}
          action={
            <Box width={150}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Status</InputLabel>
                <Select
                  value={filters.status || "all"}
                  onChange={handleStatusChange}
                  label="Status"
                  autoWidth
                >
                  {statusOptions.map((statusOption) => (
                    <MenuItem key={statusOption.id} value={statusOption.id}>
                      {statusOption.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          }
          title="Recouvrements"
        /> */}
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            // {...rest}
          >
            <Grid item>
              <Typography variant="h3" sx={{ mt: 1, ml: 1 }}>
                Recouvrements
              </Typography>
              <CasesSearch />
            </Grid>
            <Grid item>
              <Stack
                sx={{
                  alignItems: "end",
                  justifyContent: "space-between",
                  mr: 2,
                }}
              >
                <Button
                  size="small"
                  rel="noopener noreferrer"
                  sx={{ mb: 1 }}
                  variant="contained"
                  startIcon={<AddTwoToneIcon fontSize="small" />}
                >
                  Ajouter
                </Button>

                <Tooltip arrow title="Rafraîchir">
                  <IconButton color="primary">
                    <AutorenewIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Grid>
          </Grid>
          {/* <Typography variant="h4" sx={{ mt: 1, ml: 1 }}>
            Recouvrements
          </Typography>
          <CasesSearch /> */}
        </>
      )}
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {/* <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selectedAllCryptoOrders}
                  indeterminate={selectedSomeCryptoOrders}
                  onChange={handleSelectAllCryptoOrders}
                />
              </TableCell> */}
              <TableCell>IDENTIFIANT</TableCell>
              <TableCell>DATE</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>NOM</TableCell>
              <TableCell>TYPE</TableCell>
              <TableCell>CONTRAT</TableCell>
              <TableCell>FACTURE</TableCell>
              <TableCell>MONTANT</TableCell>
              <TableCell>FOURNISSEUR</TableCell>
              <TableCell>TRANSPORTEUR</TableCell>
              <TableCell>SCORE</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedCryptoOrders.map((cryptoOrder) => {
              const isCryptoOrderSelected = selectedCryptoOrders.includes(
                cryptoOrder.identifiant
              );
              return (
                <TableRow
                  hover
                  key={cryptoOrder.identifiant}
                  selected={isCryptoOrderSelected}
                >
                  {/* this is the first colomn its the checkbox */}
                  {/* <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isCryptoOrderSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneCryptoOrder(event, cryptoOrder.identifiant)
                      }
                      value={isCryptoOrderSelected}
                    />
                  </TableCell> */}
                  {/* the secend colomn in our case is DAtes */}
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      <Link
                        href={`/case/${cryptoOrder.caseId}`}
                        rel="noopener noreferrer"
                      >
                        {/* add a functoin for making the id to be in 10 digits like 1-->0000000001 */}
                        {cryptoOrder.caseId}
                      </Link>
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary" noWrap>
                      {format(cryptoOrder.orderDate, "MMMM dd yyyy")}
                    </Typography> */}
                  </TableCell>
                  {/* the colomn 3 */}
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {cryptoOrder.startDate}
                    </Typography>
                  </TableCell>
                  {/* the colomn 4 */}
                  <TableCell>
                    {getStatusLabel(cryptoOrder.status.status)}
                    {/* { (cryptoOrder?.status?.status)} */}
                  </TableCell>

                  {/* the colomn 5 */}
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {cryptoOrder.thirdParty.firstName}{" "}
                      {cryptoOrder.thirdParty.lastName}
                    </Typography>
                    {/* <Typography variant="body2" color="text.secondary" noWrap>
                      {numeral(cryptoOrder.amount).format(
                        `${cryptoOrder.currency}0,0.00`
                      )}
                    </Typography> */}
                  </TableCell>
                  {/* deplicated from the above */}
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {cryptoOrder.thirdParty.tiersType}
                    </Typography>
                  </TableCell>
                  {/* deplicated from the above */}
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {/* {cryptoOrder.contrat} */}
                    </Typography>
                  </TableCell>
                  {/* deplicated from the above */}
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {/* {cryptoOrder.facture} */}
                    </Typography>
                  </TableCell>
                  {/* deplicated from the above */}
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {/* {cryptoOrder.montant} */}
                    </Typography>
                  </TableCell>
                  {/* deplicated from the above */}
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {/* {cryptoOrder.fournisseur} */}
                    </Typography>
                  </TableCell>

                  {/* deplicated from the above */}
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {
                        // empty cells
                      }
                    </Typography>
                  </TableCell>
                  {/* the colomn 6 */}
                  {/* <TableCell>
                    {getStatusLabel(cryptoOrder.status)}
                  </TableCell> */}
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {
                        // empty cells
                      }
                    </Typography>
                  </TableCell>

                  {/* this coloms will be commanted for now we donot use it I guess */}
                  {/* the colomn 7 the last one for edit and delete */}
                  {/* <TableCell align="right"> */}
                  {/* the button or icon for editing */}
                  {/* <Tooltip title="Edit Order" arrow>
                      <IconButton
                        sx={{
                          "&:hover": {
                            background: theme.colors.primary.lighter,
                          },
                          color: theme.palette.primary.main,
                        }}
                        color="inherit"
                        size="small"
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip> */}

                  {/* the button for deleting */}
                  {/* <Tooltip title="Delete Order" arrow>
                      <IconButton
                        sx={{
                          "&:hover": { background: theme.colors.error.lighter },
                          color: theme.palette.error.main,
                        }}
                        color="inherit"
                        size="small"
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip> */}
                  {/* </TableCell> */}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredCryptoOrders.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};

CasesTable.propTypes = {
  cryptoOrders: PropTypes.array.isRequired,
};

CasesTable.defaultProps = {
  cryptoOrders: [],
};

export default CasesTable;
