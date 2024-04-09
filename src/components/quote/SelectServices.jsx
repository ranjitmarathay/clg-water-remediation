import { Box, FormControl, ListItemText, Checkbox, Select, OutlinedInput, MenuItem, Chip } from "@mui/material";
import React from "react";

export default function SelectServices(props) {

  return (
    <FormControl fullWidth sx={{ mt: 2 }}>
      <Select
        label="Services"
        multiple
        value={props.selectedServices.filter(service => service.selected).map(service => service.service)}
        onChange={props.handleServicesChange}
        input={<OutlinedInput id="select-multiple-chip" label="Services" />}
        renderValue={(selected) => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map((service) => (
              <Chip key={service} label={service} />
            ))}
          </Box>
        )}
      >
        {props.selectedServices.map((service) => (
          <MenuItem key={service.service} value={service.service}>
            <Checkbox checked={service.selected} />
            <ListItemText primary={service.service} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}