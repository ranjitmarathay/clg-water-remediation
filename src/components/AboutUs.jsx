import { Container, Typography, Box, Grid, Stack } from '@mui/material';
import GetQuoteButton from './GetQuoteButton';

import defaultImage from '../images/defaultImage.jpeg';
import plumber from '../images/plumber.jpeg';

export default function AboutUs() {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          About Austin Water Mitigation
        </Typography>
        <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.5rem" } }} color="text.secondary">
          We provide top-notch water mitigation services to the Austin community, ensuring the safety, comfort, and satisfaction of our customers through efficient, professional, and affordable solutions.
        </Typography>
      </Box>

      <Grid container spacing={2} my={4}>
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            src={plumber}
            alt="Random landscape"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box my={4}>
            <Typography variant="h4" gutterBottom>
              Our Goal
            </Typography>
            <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.5rem" } }} color="text.secondary">
              We believe in the importance of restoring not just properties but also peace of mind, by delivering compassionate and expert care in every service we offer.
              Our purpose is to help residents and businesses in Austin quickly recover from water damage, enabling them to enjoy their comfortable spaces again while minimizing the impact on their lives and finances.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} sx={{ display: "flex" }}>
          <Stack>
            <Typography variant="h4" gutterBottom>
              Contact Us
            </Typography>
            <Typography sx={{ fontSize: { xs: "1rem", sm: "1rem", md: "1.2rem", lg: "1.5rem" } }} color="text.secondary">
              Have questions or want to schedule a consultation? Call us at (512) 476-1238.
            </Typography>          
            <GetQuoteButton text="Get An Instant Quote" color="primary"/>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}
