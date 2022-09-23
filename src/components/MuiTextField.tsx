import React, { useState } from "react";
import { Stack, TextField, InputAdornment } from "@mui/material";

export const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? 'Required' : 'Do not share your credential'}
        />
        <TextField
          label="password"
          type="password"
          helperText="Do not share your password"
          disabled
        />
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>
      <Stack direction="row" spacing={2}>
        {/* <TextField
          label="Amount"
          InputProps={{
            startAdorment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdorment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        /> */}
      </Stack>
    </Stack>
  );
};
