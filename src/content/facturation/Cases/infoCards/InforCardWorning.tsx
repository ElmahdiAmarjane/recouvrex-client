import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import type { SxProps } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
// import { Receipt as ReceiptIcon } from '@phosphor-icons/react/dist/ssr/Receipt';
import WarningIcon from '@mui/icons-material/Warning';
import { Box } from '@mui/material';
export interface InforCardWorningProps {
  sx?: SxProps;
  value: string;
  title:String;
}

export default function InforCardWorning({ title,value, sx }: InforCardWorningProps): React.JSX.Element {
  return (
    <Box sx={{m:1}}>
    <Card sx={sx}>
      <CardContent>
        <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }} spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              {title}
            </Typography>
            <Typography variant="h4">{value}</Typography>
          </Stack>
          <Avatar sx={{ backgroundColor: 'var(--mui-palette-primary-main)', height: '30px', width: '30px' }}>
            {/* <ReceiptIcon fontSize="var(--icon-fontSize-lg)" /> */}
            <WarningIcon color="primary"/>
          </Avatar>
          {/* <WarningIcon color="primary"/> */}
        </Stack>
      </CardContent>
    </Card>
    </Box>
  );
}
