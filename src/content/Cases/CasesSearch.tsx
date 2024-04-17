import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { Container, IconButton, Tooltip, useTheme } from "@mui/material";
import { useState, FC } from "react";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import UseForm from "./UseForm";
import TuneIcon from "@mui/icons-material/Tune";
interface CasesSearchProps {
  searchCasesByKeyWord: (keyword: string) => void;
}

const CasesSearch: FC<CasesSearchProps> = ({ searchCasesByKeyWord }) => {
  const [searchkeyWord, setSearchkeyWord] = useState<string>("");
  const [showUseForm, setShowUseForm] = useState<boolean>(false);
  const theme = useTheme(); // Access the theme object

  const handleFilterClick = () => {
    setShowUseForm((prevValue) => !prevValue); // Toggle the value of showUseForm
  };

  return (
    <Box position="relative">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: 800,
          maxWidth: '100%',
          m: 1,
          pt: 0,
          mt: 0,
        }}
      >
        <TextField
          onChange={(e) => { setSearchkeyWord(e.target.value) }}
          value={searchkeyWord}
          size="small"
          fullWidth
          placeholder='Tapez pour filtrer ou appuyez sur Entrée pour rechercher la base de données'
          id="fullWidth"
          sx={{
            mr: 1,
            pt: 0,
            mt: 0,
          }} // Margin for the TextField
        />

        <Box > {/* Padding for the Box containing the SearchIcon */}
          <Tooltip arrow title="Filtre">
            <TuneIcon color="primary" onClick={handleFilterClick} />
          </Tooltip>
        </Box>

        <Box > {/* Padding for the Box containing the SearchIcon */}
          <Tooltip arrow title="Search">
            <IconButton color="primary" onClick={() => { searchCasesByKeyWord(searchkeyWord) }} >
              <SearchIcon color="secondary" />
            </IconButton>
          </Tooltip>
        </Box>

        <Box > {/* Padding for the Box containing the SearchIcon */}
          <Tooltip arrow title="Exel">
            <IconButton color="primary" >
              <img src="/exel-icon.png" width="20pt" height="25pt" alt="img" />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      {showUseForm && (
        <Box
          position="absolute"
          top="280px" // Adjust this value as needed for the desired space on top
          left={0}
          zIndex={9999}
          width="200%" // Width expanded to fill the screen
          height="calc(100% - 80px)" // Adjust the height to fill the remaining space
          display="flex"
          justifyContent="center"
          alignItems="center"
          bgcolor="rgba(0, 0, 0, 0.5)"
          sx={{
            [theme.breakpoints.down('md')]: {
              width: '90%', // Change width to 100% on medium screens
            },
          }}
        >
          <UseForm />
        </Box>
      )}
    </Box>
  );
}

export default CasesSearch;
