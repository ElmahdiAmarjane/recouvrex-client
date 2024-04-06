import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import TasksTable from './TasksTable';

export default function CaseTasks() {
  return (
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1-content"
      id="panel1-header"
    >
      
      <Typography variant="h3" >
      Tâches
        </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <TasksTable/>
    </AccordionDetails>
  </Accordion>
  );
}
