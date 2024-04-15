import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";



interface ContratHeaderProps {
  contratId: string;
}

function ContratHeader({ contratId }: ContratHeaderProps) {
  return (
    <Grid container>
      <Grid item sm={8}>
        <Stack
          direction="row" // Ensure this Stack that contains all buttons is set to "row"
          alignItems="center" // Align items in the center vertically
          spacing={1} // Add spacing between each item (Button) in the Stack
        >
          <Typography variant="h3" sx={{ mt: 1, ml: 1 }}>
            Contrat N° {contratId} - MIRA DIDI
          </Typography>
          <Button
            size="small"
            sx={{ backgroundColor: "red" }}
            variant="contained"
          >
            Perte / Radie
          </Button>
        </Stack>
        <Box  sx={{mt:1}}>
        <Button
          size="small"
          sx={{ backgroundColor: "green" }}
          variant="contained"
        >
          Avenant
        </Button>
        </Box>

      
      </Grid>

      <Grid item sm={4} sx={{ textAlign: "right" }}>
        <Tooltip arrow title="calender">
          <IconButton
            size="small"
            sx={{ border: "1px solid ", ml: 0.5 }}
            color="primary"
          >
            <CalendarMonthIcon />
          </IconButton>
        </Tooltip>

        <Tooltip arrow title="History">
          <IconButton
            size="small"
            sx={{ border: "1px solid ", ml: 0.5 }}
            color="primary"
          >
            <HistoryOutlinedIcon />
          </IconButton>
        </Tooltip>
        <Tooltip arrow title="Show">
          <IconButton
            size="small"
            sx={{ border: "1px solid ", ml: 0.5 }}
            color="primary"
          >
            <RemoveRedEyeOutlinedIcon />
          </IconButton>
        </Tooltip>

        <Box sx={{mt:1}}>
          <Button
            size="small"
            variant="outlined"
          >
            Avenant
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} >
      <Divider variant="middle" sx={{my:1}} />
      </Grid>

      <Grid item xs={12}  >
      <Button
      sx={{mr:0.5}}
        variant="contained"
        color="primary"
        startIcon={<CalendarMonthIcon />}
      >
        Documents à télécharger
      </Button>

      <Button
      sx={{mr:0.5}}
        variant="contained"
        color="primary"
        startIcon={<CalendarMonthIcon />}
      >
        Documents internes
      </Button>

      <Button
      sx={{mr:0.5}}
        variant="contained"
        color="primary"
        startIcon={<CalendarMonthIcon />}
      >
        Pièces garant
      </Button>

      <Button
      sx={{mr:0.5}}
        variant="contained"
        color="primary"
        startIcon={<CalendarMonthIcon />} // Replace with the actual icon you need
      >
        Documents scannés
      </Button>
       
      </Grid>
    </Grid>
  );
}

export default ContratHeader;
