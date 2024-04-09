import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";

import defaultImage from '../images/defaultImage.jpeg';


function ServicesItem(props) {
  return (
    <Grid container spacing={2} sx={{ alignItems: "center", marginBottom: 2, marginTop: 2 }} direction={{ xs: "column", lg: "row" }}>
      <Grid item xs={12} lg={6}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%" }}>
          <Typography variant="h5" sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem", lg: "2.5rem" } }}>
            {props.title}
          </Typography>
          <Typography sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.2rem", lg: "1.5rem" } }} color="text.secondary">
            {props.text}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} lg={6} sx={{ alignContent: "center" }}>
      <Box
        component="img"
        src={props.image}
        sx={{
          width: { xs: "100%", lg: "100%" },
          height: { lg: "auto" },
          maxHeight: { xs: "500px", lg: "500px" }, 
          objectFit: "cover",
          objectPosition: "center",
          marginLeft: { lg: "auto" },
          marginRight: { lg: "auto" }
        }}
      />
      </Grid>
    </Grid>
  )
}

export default function Services(props) {

  if (props.landingPage){
    return null
  } else {
    return (
      <Container>
        <Typography variant="h3" sx={{ fontSize: { xs: "1.8rem", sm: "2.5rem", md: "3rem" } }} color="#000000">
          Services
        </Typography>
        <ServicesItem
          title="Service 1"
          text="Include information about how this service operates and how it is transformative for the customer."
          image={defaultImage}
        />
        <ServicesItem
          title="Service 2"
          text="Include information about how this service operates and how it is transformative for the customer."
          image={defaultImage}
        />
        <ServicesItem
          title="Service 3"
          text="Include information about how this service operates and how it is transformative for the customer."
          image={defaultImage}
        />
        <ServicesItem
          title="Service 4"
          text="Include information about how this service operates and how it is transformative for the customer."
          image={defaultImage}
        />
        <ServicesItem
          title="Service 5"
          text="Include information about how this service operates and how it is transformative for the customer."
          image={defaultImage}
        />
      </Container>
    );
  }
}