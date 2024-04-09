import React, { useState } from 'react';

import {Container, Card, CardContent, Typography, Box, Grid} from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


function ReviewCard(props) {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  let [first, last] = props.name.split(" ");


  const starRating = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<StarIcon key={i} color='warning'/>);
      } else if (i + 0.5 === rating) {
        stars.push(<StarHalfIcon key={i} />);
      } else {
        stars.push(<StarOutlineIcon key={i} />);
      }
    }
    return stars;
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h5" component="div">
              {first} {last[0]}. <VerifiedIcon />
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="text.secondary">
              {starRating(props.rating)}
            </Typography>
          </Grid>
        </Grid>
        <Typography fontSize={{ xs: 12, sm: 14, md: 18, lg: 22 }} color="text.secondary" >
          {props.comment}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {

  const [images, setImages] = useState([
    "https://yardzen.com/wp-content/uploads/2022/07/robinson_4595-opal-cliff-drive-v2-4.jpeg",
  ]);


  const [customerReviews, setCustomerReviews] = useState([
    { name: "John Smith", comment: "Incredible value for the price! The workers were diligent and finished the job quicker than expected. Truly a 5-star experience!", rating: 5 },
    { name: "Emily Johnson", comment: "Fantastic work at a great price. The team worked tirelessly and completed the project ahead of schedule. Highly satisfied!", rating: 4.8 },
    { name: "Michael Brown", comment: "Outstanding value! The workers put in a lot of effort and wrapped up the project swiftly. Couldn't be happier.", rating: 4.9 },
    { name: "Sophia Davis", comment: "Excellent service for the cost. The team was hardworking and finished the landscaping quickly. Highly recommend!", rating: 4.7 },
    { name: "Daniel Martinez", comment: "Great bang for your buck! The workers were dedicated and completed the job faster than anticipated. Top-notch service!", rating: 5 },
    { name: "Olivia Garcia", comment: "Superb value! The workers were industrious and expedited the project efficiently. Very pleased with the results.", rating: 4.6 },
    { name: "William Rodriguez", comment: "Amazing value for the investment. The team worked vigorously and finished the job in record time. Exceptional quality!", rating: 4.8 },
    { name: "Isabella Wilson", comment: "Incredible value and work ethic. The workers were relentless and completed the landscaping swiftly. Highly impressed!", rating: 5 },
    { name: "Ethan Anderson", comment: "Excellent value for the money. The team was hardworking and quick to finish the project. Outstanding craftsmanship!", rating: 4.7 },
    { name: "Charlotte Thomas", comment: "Remarkable value! The workers were dedicated and wrapped up the job quicker than expected. A job well done!", rating: 4.9 },
    { name: "Alexander Lee", comment: "The value I received exceeded my expectations. The team was incredibly efficient and completed the work much faster than I thought possible. Outstanding service and quality!", rating: 4.4 },
    { name: "Mia Gonzalez", comment: "Fantastic value for the exceptional work done. The workers were diligent and quick, finishing the project well ahead of schedule. I'm thoroughly impressed and would highly recommend them!", rating: 5 }
  ]);


  const averageRating = (customer) => {
    let total = 0;
    for (let i = 0; i < customer.length; i++) {
      total += parseFloat(customer[i].rating);
    }
    return total / customer.length;
  };
  


  return (
    <Container sx={{paddingBottom: '10px'}}>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2, padding: 6 }}>
        <Typography variant="h4" color="#000000">
          Rated {averageRating(customerReviews).toFixed(1)} by Our Satisfied Customers!
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {customerReviews.map((item) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={item.name}> {/* Adjust the grid sizes as needed */}
            <ReviewCard name={item.name} comment={item.comment} rating={item.rating} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}