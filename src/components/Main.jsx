import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Home from './Home.jsx';
import Header from './Header.jsx';
import AboutUs from './AboutUs.jsx';
import Services from './Services.jsx';
// import Contact from './Contact.jsx';
import Quote from './quote/Quote.jsx';
import Footer from './Footer.jsx';

export default function Main() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header/>
      <Box component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </Box>
      <Footer/>
    </Box>
  );
}