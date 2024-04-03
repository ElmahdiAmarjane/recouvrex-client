import { Box, Container, Button, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import { Link as RouterLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';
// import Logo from 'src/components/LogoSign';
// import Hero from './Hero';
const TypographyH1 = styled(Typography)(
  ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Overview() {
  return (
    <OverviewWrapper>
      <Helmet>
        <title>Tokyo Free White React Typescript Admin Dashboard</title>
      </Helmet>
      <Container maxWidth="lg">
        {/* <Box display="flex" justifyContent="center" py={5} alignItems="center">
          <Logo />
        </Box>
        <Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>
          <Hero />
          
        </Card> */}
        <TypographyH1 sx={{ mb: 2 }} variant="h1">
        Welcom to Recouvrex Project
          </TypographyH1>
        <Button
            component={RouterLink}
            to="/facturation/cases"
            size="large"
            variant="contained"
          >
            Browse Live Preview
          </Button>
      </Container>
    </OverviewWrapper>
  );
}

export default Overview;
