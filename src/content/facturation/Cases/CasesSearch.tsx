import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import ExelIcon from "./ExelIcon";
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
      fullWidth 
      placeholder='Tapez pour filtrer ou appuyez sur Entrée pour rechercher la base de données' 
      id="fullWidth"
      sx={{ mr: 1,pt:0,
        mt: 0, }} // Margin for the TextField
    />
    <Box sx={{ p: 1,fontSize: 40 }}> {/* Padding for the Box containing the SearchIcon */}
      <SearchIcon color="secondary"/>
    </Box>
    <Box sx={{ p: 1,fontSize: 40 }}> {/* Padding for the Box containing the SearchIcon */}
      <ExelIcon />
    </Box>
  </Box>
  );
}
