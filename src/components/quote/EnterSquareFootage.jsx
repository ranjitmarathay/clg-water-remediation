import { FormControl, TextField, Box } from "@mui/material";
import React from "react";

export default function EnterSquareFootage(props){

  return (
    <Box>
      <FormControl fullWidth sx={{ mt: 2 }}>
        <TextField
          label="Square Footage"
          value={props.squareFootage}
          onChange={(e) => props.setSquareFootage(e.target.value)}
          required
        />
      </FormControl>
    </Box>
  )
}