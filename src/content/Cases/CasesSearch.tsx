import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import ExelIcon from "./ExelIcon";
import { IconButton, Tooltip } from "@mui/material";
export default function CasesSearch() {
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
      size="small"
      fullWidth 
      placeholder='Tapez pour filtrer ou appuyez sur Entrée pour rechercher la base de données' 
      id="fullWidth"
      sx={{ mr: 1,pt:0,
        mt: 0, }} // Margin for the TextField
    />
    <Box > {/* Padding for the Box containing the SearchIcon */}
     
      <Tooltip arrow title="Search">
        <IconButton color="primary" >
        <SearchIcon color="secondary"/>
        </IconButton>
      </Tooltip>

    </Box>
    <Box > {/* Padding for the Box containing the SearchIcon */}
     

      <Tooltip arrow title="Exel">
        <IconButton color="primary" >
        <ExelIcon />
        </IconButton>
      </Tooltip>
    </Box>
  </Box>
  );
}
