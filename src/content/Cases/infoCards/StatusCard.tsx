import * as React from "react";
// import Avatar from '@mui/material/Avatar';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import type { SxProps } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { SvgIconComponent } from "@mui/icons-material";
import WarningIcon from "@mui/icons-material/Warning";

export interface StatusCardProps {
  sx?: SxProps;
  value: number;
  id: number;
  setSelectedStatusId: (id: number) => void;
  selectedStatusId:number;
  text: string; // New prop for the text
  Icon?: SvgIconComponent; // New prop for the icon, optional if you want to keep WarningIcon as a default
  IconColor?: string;
}

export default function StatusCard({
  value,
  id,
  setSelectedStatusId,
  selectedStatusId,
  text,
  Icon = WarningIcon, // Provide WarningIcon as default
  IconColor,
  sx,
}: StatusCardProps): React.JSX.Element {
  return (
    <Box
      sx={{ m: 0.3,cursor: value>0? 'pointer': 'not-allowed' }}
      onClick={() => {
        if(value>0){
          setSelectedStatusId(id);
          console.log(id);
        }
      }}
    >
      <Card sx={sx}>
        <Box sx={{ border: id === selectedStatusId ? '2px solid blue' : '1px solid transparent',borderRadius:1 }}>
        <CardContent>
          <Stack
            direction="row"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Stack>
              <Typography color="text.secondary" variant="body1">
                {text}
              </Typography>
              <Typography variant="body1">{value}</Typography>
            </Stack>
            <Stack sx={{ background: "" }}>
              <Icon sx={{ fontSize: 35, color: IconColor }} />
            </Stack>
          </Stack>
        </CardContent>
        </Box>
      </Card>
    </Box>
  );
}
