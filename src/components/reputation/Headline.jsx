import React, { useState } from 'react';
import { Container, Typography, Box, ImageList, ImageListItem } from '@mui/material'; 
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import defaultImage from '../../images/defaultImage.jpeg';

export default function Headline(){
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [images, setImages] = useState([
    defaultImage,
    defaultImage,
    defaultImage,
    defaultImage,
  ]);

  return (
  <Container maxWidth="lg" sx={{ marginTop: 4, textAlign: "center" }}>
    <Box>
    <Typography fontSize={{ xs: 20, sm: 30, md: 40, lg: 50 }} component="div" sx={{ flexGrow: 1 }}>
      {/* Your perfect yard <u>without lifting a finger</u> */}
      ** Result after working with us + Unique value prop **
    </Typography>
    </Box>
    <Box>
      <Typography fontSize={{ xs: 15, sm: 20, md: 25, lg: 30 }} component="div" sx={{ flexGrow: 1 }}>
        Trusted by 100+ ** your city ** homeowners
      </Typography>
    </Box>
    <Box>
      <Typography fontSize={{ xs: 15, sm: 20, md: 25, lg: 30 }} component="div" sx={{ flexGrow: 1 }}>
        Call Us Today ** company website **
      </Typography>
    </Box>
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <ImageList cols={isMobile ? 2 : 4} rowHeight={isMobile ? 200 : 400}>
        {images.map((item) => (
          <ImageListItem key={item}>
            <img
              src={`${item}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>

    
  </Container>
  );
}