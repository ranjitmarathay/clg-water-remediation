import { FormControl, TextField, Box } from "@mui/material";
import React from "react";

export default function EnterAddress(props){

  return (
    <Box>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <TextField
          label="Address"
          value={props.address}
          onChange={(e) => props.setAddress(e.target.value)}
          required
        />
      </FormControl>
    </Box>
  )
}