import { Box, Container, Grid, Typography, Button, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GetQuoteButton from './GetQuoteButton';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: '#F5F5F5', color: '#fff', padding: '40px 0', paddingTop: '40px' }}>
    <Container maxWidth="lg">
      <Grid container spacing={5} justifyContent="space-between">
        <Grid item xs={12} sm={4}>
          <Typography gutterBottom sx={{ color: '#000' }} fontSize={{ xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.3rem' }}> 
            Austin Water Mitigation
          </Typography>
          <Link href="" onClick={() => navigate('/about')} color="#000" underline="hover">
            <Typography fontSize={{ xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.2rem' }}>About</Typography>
          </Link>
          <Link href="" onClick={() => navigate('/services')} color="#000" underline="hover" fontSize={{ xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.5rem' }}>
          <Typography fontSize={{ xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.2rem' }}>Services</Typography>
          </Link>
          <Link href="" onClick={() => navigate('/contact')} color="#000" underline="hover" fontSize={{ xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.5rem' }}>
          <Typography fontSize={{ xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.2rem' }}>Contact</Typography>
          </Link>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography gutterBottom sx={{ color: '#000' }} fontSize={{ xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.3rem' }}> 
            Contact
          </Typography>
          <Typography color="#000" fontSize={{ xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.2rem' }}>Email: admin@austinwatermitigation.com</Typography>
          <Typography color="#000" fontSize={{ xs: '0.9rem', sm: '1rem', md: '1.2rem', lg: '1.2rem' }}>Phone: (512) 476-1234</Typography>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
          <GetQuoteButton footer={true} color="primary"/>
          <Typography variant="body2" sx={{ textAlign: 'right', marginTop: 'auto' }} fontSize='0.9rem' color="#000">
            Created by <Link href="https://www.rpmdigitalsolutions.com" color="#000" underline="hover">RPM Digital Solutions</Link>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
  );
};
