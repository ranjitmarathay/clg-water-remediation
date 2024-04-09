import { Container, Typography, Box, TextField, Button } from '@mui/material';
import React, { useState } from 'react';

export default function Contact() {
  const [contactInfo, setContactInfo] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    email: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactInfo({ ...contactInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here (e.g., send data to an API)
    console.log(contactInfo);
  };

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h2" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h4" color="primary" sx={{ fontWeight: 'bold' }}>
          **Company phone number**
        </Typography>

        <Box my={2}>
          <Typography variant="h6" gutterBottom>
            Send us a message
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              value={contactInfo.name}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              required
              fullWidth
              id="address"
              label="Address"
              name="address"
              value={contactInfo.address}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              required
              fullWidth
              id="phoneNumber"
              label="Phone Number"
              name="phoneNumber"
              value={contactInfo.phoneNumber}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              type="email"
              value={contactInfo.email}
              onChange={handleChange}
              sx={{ mb: 2 }}
            />
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Send
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
