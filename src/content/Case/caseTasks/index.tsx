import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import TasksTable from "./TasksTable";
import NewTask from "./newTask";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { NavLink as RouterLink } from 'react-router-dom';

export default function CaseTasks() {
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h3">Tâches</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{
              display: "flex", // Use Flexbox layout
              justifyContent: "flex-end", // Align items to the end (right side)
              width: "100%", // Ensure the Box takes up full width
            }}
          >
            {/* this is the dialog for adding new tast */}
            <NewTask />
            <Tooltip arrow title="Rafraîchir">
              <IconButton size="large">
                <AutorenewIcon sx={{ color: "green" }} fontSize="small" />
              </IconButton>
            </Tooltip>
            <Tooltip arrow title="List des tâches">
              <IconButton 
               component={RouterLink}
               to="/tasks"  
              size="large">
                <FormatListBulletedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
          <TasksTable />
        </AccordionDetails>
      </Accordion>
    </>
  );
}
