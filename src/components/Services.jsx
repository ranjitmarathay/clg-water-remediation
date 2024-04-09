import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";

import defaultImage from '../images/defaultImage.jpeg';
// import buildback from '../images/buildback2.jpeg';
import buildback2 from '../images/buildback2.jpeg';
import fans from '../images/fans.jpeg';
import generalplumbing from '../images/generalplumbing.jpeg';
import mopup from '../images/mopup.jpeg';


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
          width: { xs: "100%", lg: "612px" },
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
          title="Water Mitigation"
          text="Water mitigation is the process of reducing or preventing the amount of water damage that occurs after a flood or a permeating leak. This service is transformative for the customer as it helps to prevent further damage, mold growth, and structural issues by quickly addressing the source of water and drying out the affected areas."
          image={mopup}
        />
        <ServicesItem
          title="Water Extraction"
          text="Water extraction involves the removal of excess water from your property using specialized equipment. This service is crucial for customers experiencing flooding or water accumulation, as it helps to minimize water damage, prevent mold growth, and prepare the area for drying and restoration."
          image={fans}
        />
        <ServicesItem
          title="General Plumbing"
          text="General plumbing services cover a wide range of plumbing needs, from fixing leaks and clogs to installing new fixtures. For customers, this service is transformative as it ensures the smooth functioning of their plumbing system, prevents potential water damage, and maintains the overall health of their property."
          image={generalplumbing}
        />
        <ServicesItem
          title="Water Damage Build Back"
          text="Water damage build back is the process of reconstructing and restoring areas of your property that have been damaged by water. This service is transformative for customers as it not only repairs the damage but also often includes improvements and upgrades to prevent future issues and enhance the value of their property."
          image={buildback2}
        />
      </Container>
    );
  }
}