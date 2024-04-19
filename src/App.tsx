import { useRoutes } from 'react-router-dom';
import router from 'src/router';

// Updated import paths for MUI X
// import AdapterDateFns from '@mui/x-date-pickers/AdapterDateFns';
// import LocalizationProvider from '@mui/x-date-pickers/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';

function App() {
  const content = useRoutes(router);

  return (
    <ThemeProvider>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}> */}
        <CssBaseline />
        {content}
      {/* </LocalizationProvider> */}
    </ThemeProvider>
  );
}
export default App;
