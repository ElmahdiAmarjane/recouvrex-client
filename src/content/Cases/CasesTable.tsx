import { FC, ChangeEvent, useState } from "react";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PropTypes from "prop-types";
import {
  Tooltip,
  Divider,
  Box,
  Card,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Typography,
  Grid,
  Button,
  Stack,
  Link,
} from "@mui/material";

import Label from "src/components/Label";
import { CryptoOrder, CryptoOrderStatus } from "src/models/crypto_order";
import { Case, CaseStatus } from "src/models/case";
import BulkActions from "./BulkActions";
import CasesSearch from "./CasesSearch";

interface CasesTableProps {
  className?: string;
  cryptoOrders: CryptoOrder[];
  resetAllCases: () => void;
  updateSelectedStatusId: (id: number) => void;
  searchCasesByKeyWord: (keyword: string) => void;

  searchkeyWord: string;
  setSearchkeyWord: React.Dispatch<React.SetStateAction<string>>;
}

interface Filters {
  status?: CryptoOrderStatus;
}

const getStatusLabel = (caseStatus: CaseStatus): JSX.Element => {
 

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

// here it starts
const CasesTable: FC<CasesTableProps> = ({
  cryptoOrders,
  resetAllCases,
  updateSelectedStatusId,
  searchCasesByKeyWord,
  searchkeyWord,
  setSearchkeyWord,
}) => {
  const [selectedCryptoOrders, setSelectedCryptoOrders] = useState<string[]>(
    []
  );
  const selectedBulkActions = selectedCryptoOrders.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null,
  });


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
  // const selectedSomeCryptoOrders =
  //   selectedCryptoOrders.length > 0 &&
  //   selectedCryptoOrders.length < cryptoOrders.length;
  // const selectedAllCryptoOrders =
  //   selectedCryptoOrders.length === cryptoOrders.length;
  // // const theme = useTheme();

  return (
    <Card>
      {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )}
      {!selectedBulkActions && (
        <>
        
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h3" sx={{ mt: 1, ml: 1 }}>
                Recouvrements
              </Typography>
              <CasesSearch
                searchCasesByKeyWord={searchCasesByKeyWord}
                searchkeyWord={searchkeyWord}
                setSearchkeyWord={setSearchkeyWord}
              />
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

                <Tooltip arrow title="Réinitialiser">
                  <IconButton
                    color="primary"
                    onClick={() => {
                      updateSelectedStatusId(0);
                      resetAllCases();
                    }}
                  >
                    <AutorenewIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Grid>
          </Grid>
        
        </>
      )}
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>IDENTIFIANT</TableCell>
              <TableCell>DATE</TableCell>
              <TableCell>STATUS</TableCell>
              <TableCell>NOM</TableCell>
              <TableCell>TYPE</TableCell>
              <TableCell>CONTRAT</TableCell>
              <TableCell>FACTURE</TableCell>
              <TableCell>MONTANT</TableCell>
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
                        {cryptoOrder.caseId}
                      </Link>
                    </Typography>
                  </TableCell>
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
                  <TableCell
                    sx={{ maxWidth: "1200px", cursor: "pointer" }}
                    onClick={() => {
                      updateSelectedStatusId(cryptoOrder.status.id);
                    }}
                  >
                    {getStatusLabel(cryptoOrder.status.status)}
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {cryptoOrder.thirdParty.title}{" "}
                      {cryptoOrder.thirdParty.firstName}{" "}
                      {cryptoOrder.thirdParty.lastName}
                    </Typography>
                   
                  </TableCell>
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
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {cryptoOrder.totalAmount} DH
                    </Typography>
                  </TableCell>
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
