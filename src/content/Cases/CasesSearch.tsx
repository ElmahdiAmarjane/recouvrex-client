import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton, Tooltip } from "@mui/material";
import { useState, FC } from "react";



// import { FC } from 'react';

interface CasesSearchProps {
  searchCasesByKeyWord: (keyword: string) => void;
}

const CasesSearch: FC<CasesSearchProps> = ({ searchCasesByKeyWord }) => {
  // Component implementation goes

// export default const CasesSearch: FC<CasesSearchProps> =({searchCasesByKeyWord}) {

  const [searchkeyWord, setSearchkeyWord] = useState<string>("");
  return (
    <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      width: 800,
      maxWidth: '100%',
      m: 1,
      pt:0,
      mt: 0,
    }}
  >
    <TextField 
      onChange={(e)=>{setSearchkeyWord(e.target.value)}}
      value={searchkeyWord}
      size="small"
      fullWidth 
      placeholder='Tapez pour filtrer ou appuyez sur Entrée pour rechercher la base de données' 
      id="fullWidth"
      sx={{ mr: 1,pt:0,
        mt: 0, }} // Margin for the TextField
    />
    <Box > {/* Padding for the Box containing the SearchIcon */}
     
      <Tooltip arrow title="Search">
        <IconButton color="primary" onClick={()=>{searchCasesByKeyWord(searchkeyWord)}} >
        <SearchIcon color="secondary"/>
        </IconButton>
      </Tooltip>

    </Box>
    <Box > {/* Padding for the Box containing the SearchIcon */}
     

      <Tooltip arrow title="Exel">
        <IconButton color="primary" >
        <img src="/exel-icon.png"   width="20pt"
        height="25pt" alt="img" />
        </IconButton>
      </Tooltip>
    </Box>
  </Box>
  );
}

export default CasesSearch;
