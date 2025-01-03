import React, { useState } from "react";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import { checkOtp } from "../../services";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
export default function CheckOtfForm({mobile, code, setCode, setStep}) {
    const [alertShow , setAlertShow]=useState(false);
  const onSubmit = async () => {
    if (!code) {
      setAlertShow(true)
    } else {
      checkOtp(mobile , code);
    }
  };
  return (
    <Grid container spacing={2} sx={{ margin: "100px auto", maxWidth: "800px" , boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
      borderRadius: 4, padding:'16px' }}>
      <Grid>
        <Typography variant="h3" component="h6">
          Check Code
        </Typography>
      </Grid>
      <Typography variant="h5" component="h6" sx={{margin:'16px'}}>
      Please enter the Verification code sent to number {mobile} and press the send button.
      </Typography>

      <TextField
        type="number"
        label="Enter Verification code..."
        variant="outlined"
        value={code}
        onChange={(e) =>{setCode(e.target.value)}}
      />

      <Button variant="outlined" onClick={onSubmit}>
        Send...
      </Button>
      <Button variant="outlined" onClick={()=>setStep(1)}>
        Change mobile number
      </Button>
      {alertShow && (
         <Stack sx={{ width: "100%" }} spacing={2}>
         <Alert severity="warning">Enter the Verification code</Alert>
       </Stack>
      )}
    </Grid>
  )
}
