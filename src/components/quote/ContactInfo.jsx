import { TextField, FormControl, Box, Stack } from "@mui/material";
import React from "react";

export default function ContactInfo(props){

  return (
    <Box>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <Stack spacing={2}>
          <TextField
            label="Full Name"
            value={props.name}
            onChange={(e) => props.setName(e.target.value)}
            required
          />
          <TextField
            label="Email"
            value={props.email}
            onChange={(e) => props.setEmail(e.target.value)}
            required
            type="email"
          />
          <TextField
            label="Phone Number"
            value={props.phoneNumber}
            onChange={(e) => props.setPhone(e.target.value)}
            required
            type="tel"
          />
          <TextField
            label="Message"
            value={props.message}
            onChange={(e) => props.setMessage(e.target.value)}
          />
        </Stack>
      </FormControl>
    </Box>
  )
}