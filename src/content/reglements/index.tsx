import { Box, Container, Card } from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Footer from 'src/components/Footer';

function Reglements() {
  return (
    
      <>
      <Helmet>
        <title> Reglements Reglements Reglements</title>
      </Helmet>
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="center" py={5} alignItems="center">
          {/* <Logo /> */}
        </Box>
        <Card sx={{ p: 10, mb: 10, borderRadius: 12 }}>
          {/* <Hero /> */}
        </Card>
      </Container>
      <Footer />
    </>
    
   
  )
}

export default Reglements;
