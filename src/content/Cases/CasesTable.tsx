import { FC, ChangeEvent, useState } from "react";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import PropTypes from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";

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
import { Case, CaseStatus } from "src/models/case";
import BulkActions from "./BulkActions";
import CasesSearch from "./CasesSearch";

interface CasesTableProps {
  className?: string;
  cases: Case[];
  resetAllCases: () => void;
  updateSelectedStatusId: (id: number) => void;
  searchCasesByKeyWord: (keyword: string) => void;

  searchkeyWord: string;
  setSearchkeyWord: React.Dispatch<React.SetStateAction<string>>;
}

interface Filters {
  status?: CaseStatus;
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

  interface TextColor {
    text: string;
    color:
      | string
      | "primary"
      | "black"
      | "secondary"
      | "error"
      | "warning"
      | "success"
      | "info";
  }

  const { text, color }: TextColor = caseStatusMap[caseStatus];

  return <Label color={color}>{text}</Label>;
};

const applyFilters = (cases: Case[], filters: Filters): Case[] => {
  return cases.filter((caseItem) => {
    let matches = true;

    if (filters.status && caseItem.status.status !== filters.status) {
      matches = false;
    }

    return matches;
  });
};

const applyPagination = (
  cases: Case[],
  page: number,
  limit: number
): Case[] => {
  return cases.slice(page * limit, page * limit + limit);
};

// here it starts
const CasesTable: FC<CasesTableProps> = ({
  cases,
  resetAllCases,
  updateSelectedStatusId,
  searchCasesByKeyWord,
  searchkeyWord,
  setSearchkeyWord,
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedCases, setSelectedCases] = useState<string[]>([]);
  const selectedBulkActions = selectedCases.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [filters, setFilters] = useState<Filters>({
    // status: null,
  });

  const handlePageChange = (event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredCases = applyFilters(cases, filters);
  const paginatedCases = applyPagination(filteredCases, page, limit);

  return (
    <Card>
      {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )}
      {!selectedBulkActions && (
        <>
          <Grid container justifyContent="space-between" alignItems="center">
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
      {!(cases.length > 0) ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt:2
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer sx={{ minHeight: 150 }}>
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
              {paginatedCases.map((caseItem) => {
                const isCaseSelected = selectedCases.includes(caseItem.id);
                return (
                  <TableRow hover key={caseItem.id} selected={isCaseSelected}>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        <Link
                          href={`/case/${caseItem.caseId}`}
                          rel="noopener noreferrer"
                        >
                          {caseItem.caseId}
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
                        {caseItem.startDate}
                      </Typography>
                    </TableCell>
                    <TableCell
                      sx={{ maxWidth: "1200px", cursor: "pointer" }}
                      onClick={() => {
                        updateSelectedStatusId(caseItem.status.id);
                      }}
                    >
                      {getStatusLabel(caseItem.status.status)}
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {caseItem.thirdParty.title}{" "}
                        {caseItem.thirdParty.firstName}{" "}
                        {caseItem.thirdParty.lastName}
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
                        {caseItem.thirdParty.tiersType}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      ></Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      ></Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        variant="body1"
                        fontWeight="bold"
                        color="text.primary"
                        gutterBottom
                        noWrap
                      >
                        {caseItem.totalAmount} DH
                      </Typography>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredCases.length}
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
  cases: PropTypes.array.isRequired,
};

CasesTable.defaultProps = {
  cases: [],
};

export default CasesTable;
