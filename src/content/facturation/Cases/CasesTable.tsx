import { FC, ChangeEvent, useState, useEffect } from "react";
import { format } from "date-fns";
import numeral from "numeral";
import PropTypes from "prop-types";
import axios, { AxiosResponse } from 'axios';
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
} from "@mui/material";

import Label from "src/components/Label";
// import { CryptoOrder, CryptoOrderStatus } from "src/models/crypto_order";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import BulkActions from "./BulkActions";
import CasesSearch from "./CasesSearch";
import { Case } from "src/models/Case";

// interface CasesTableProps {
//   className?: string;
//   cryptoOrders: CryptoOrder[];
// }

// interface Filters {
//   status?: CryptoOrderStatus;
// }

// const getStatusLabel = (cryptoOrderStatus: CryptoOrderStatus): JSX.Element => {
//   const map = {
//     failed: {
//       text: "Failed",
//       color: "error",
//     },
//     completed: {
//       text: "Completed",
//       color: "success",
//     },
//     pending: {
//       text: "Pending",
//       color: "warning",
//     },
//   };

  // const { text, color }: any = map[cryptoOrderStatus];

//   return <Label color={color}>{text}</Label>;
// };

// const applyFilters = (
//   cryptoOrders: CryptoOrder[],
//   filters: Filters
// ): CryptoOrder[] => {
//   return cryptoOrders.filter((cryptoOrder) => {
//     let matches = true;

//     if (filters.status && cryptoOrder.status !== filters.status) {
//       matches = false;
//     }

//     return matches;
//   });
// };

// const applyPagination = (
//   cryptoOrders: CryptoOrder[],
//   page: number,
//   limit: number
// ): CryptoOrder[] => {
//   return cryptoOrders.slice(page * limit, page * limit + limit);
// };

const CasesTable: FC<{ cases: Case[] }> = ({ cases }) => {
//   const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
//     []
//   );
  // const selectedBulkActions = selectedCryptoOrders.length > 0;
  // const [page, setPage] = useState<number>(0);
  // const [limit, setLimit] = useState<number>(5);
  // const [filters, setFilters] = useState<Filters>({
  //   status: null,
  // });

  // const statusOptions = [
  //   {
  //     id: "all",
  //     name: "All",
  //   },
  //   {
  //     id: "completed",
  //     name: "Completed",
  //   },
  //   {
  //     id: "pending",
  //     name: "Pending",
  //   },
  //   {
  //     id: "failed",
  //     name: "Failed",
  //   },
  // ];

  // const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
  //   let value = null;

  //   if (e.target.value !== "all") {
  //     value = e.target.value;
  //   }

  //   setFilters((prevFilters) => ({
  //     ...prevFilters,
  //     status: value,
  //   }));
  // };

  // const handleSelectAllCryptoOrders = (
  //   event: ChangeEvent<HTMLInputElement>
  // ): void => {
  //   setSelectedCryptoOrders(
  //     event.target.checked
  //       ? cryptoOrders.map((cryptoOrder) => cryptoOrder.id)
  //       : []
  //   );
  // };

  // const handleSelectOneCryptoOrder = (
  //   event: ChangeEvent<HTMLInputElement>,
  //   cryptoOrderId: string
  // ): void => {
  //   if (!selectedCryptoOrders.includes(cryptoOrderId)) {
  //     setSelectedCryptoOrders((prevSelected) => [
  //       ...prevSelected,
  //       cryptoOrderId,
  //     ]);
  //   } else {
  //     setSelectedCryptoOrders((prevSelected) =>
  //       prevSelected.filter((id) => id !== cryptoOrderId)
  //     );
  //   }
  // };

  // const handlePageChange = (event: any, newPage: number): void => {
  //   setPage(newPage);
  // };

  // const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
  //   setLimit(parseInt(event.target.value));
  // };

  // const filteredCryptoOrders = applyFilters(cryptoOrders, filters);
  // const paginatedCryptoOrders = applyPagination(
  //   filteredCryptoOrders,
  //   page,
  //   limit
  // // );
  // const selectedSomeCryptoOrders =
  //   selectedCryptoOrders.length > 0 &&
  //   selectedCryptoOrders.length < cryptoOrders.length;
  // const selectedAllCryptoOrders =
  //   selectedCryptoOrders.length === cryptoOrders.length;
  // const theme = useTheme();
  ////////////////////////////
///////////////////////
//////////////////////////////
///////////////////////////////////

//const [cases, setCases] = useState<Case[] | undefined>(undefined);

// // Function to fetch filtered cases and update state
// const fetchCases = async (caseId: string, status: string, procedure: string) => {
//   try {
//     const response = await getFilteredCases(caseId, status, procedure);
//     setCases(response.data); // Assuming response.data is an array of cases
//   } catch (error) {
//     console.error('Error fetching cases:', error);
//   }
// };
//   // Call fetchCases when component mounts or whenever needed
//   useEffect(() => {
//     fetchCases('1', '1', '1');
//     console.log(cases);
//   }, []); // Empty dependency array ensures it runs only once when component mounts


  return (
    <Card>
      {/* {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )}
      {!selectedBulkActions && (
         <>
        <CardHeader
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
        />
        <CasesSearch/>
       </>
      )} */}
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                {/* <Checkbox
                  color="primary"
                  checked={selectedAllCryptoOrders}
                  indeterminate={selectedSomeCryptoOrders}
                  onChange={handleSelectAllCryptoOrders}
                /> */}
              </TableCell>
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
            {cases && cases.map((cases) => {
              // const isCryptoOrderSelected = selectedCryptoOrders.includes(
              //   cases.id.toString()
              // );
              return (
                <TableRow
                  hover
                  key={cases.id}
                  // selected={isCryptoOrderSelected}
                >
                  {/* this is the first colomn its the checkbox */}
                  <TableCell padding="checkbox">
                    {/* <Checkbox
                      color="primary"
                      checked={isCryptoOrderSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneCryptoOrder(event, cryptoOrder.id.toString())
                      }
                      value={isCryptoOrderSelected}
                    /> */}
                  </TableCell>
                  {/* the secend colomn in our case is DAtes */}
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {cases.caseId}
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
                      {cases.thirdParty?.businessEmail}
                    </Typography>
                  </TableCell>
                  {/* the colomn 4 */}
                  {/* <TableCell>{getStatusLabel(cryptoOrder.caseId)}</TableCell> */}

                  {/* the colomn 5 */}
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {cases.procedure?.procedureLabel}
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
                      {cases.insuranceSettlementAmout}
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
                      {cases.status.status}
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
                      {cases.status.id}
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
                      {cases.startDate}
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
                      {cases.startDate}
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
                      {cases.startDate}
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
                      {cases.startDate}
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
      {/* <Box p={2}>
        <TablePagination
          component="div"
          count={filteredCryptoOrders.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box> */}
    </Card>
  );
};

CasesTable.propTypes = {
  cases: PropTypes.array.isRequired,
};

CasesTable.defaultProps = {
  cases: [],
};

export default CasesTable;
