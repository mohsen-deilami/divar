import React, { useState } from "react";
import { InputLabel, OutlinedInput, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import { sendOtp } from "../../services/services";
import SendIcon from '@mui/icons-material/Send';
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function SendOtpForm({ setStep, mobile, setMobile }) {
  const [alertShow , setAlertShow]=useState(false);
  const onSubmit = async () => {
    if (mobile.length !== 11) {
      setAlertShow(true)
    } else {
    const response  =await sendOtp(mobile);
   
    if(response){

      setStep(2);
    }
    }
  };
  return (
    <Grid container spacing={2} sx={{ margin: "100px auto", maxWidth: "800px" , boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
      borderRadius: 4, padding:'16px' }}>
      <Grid>
        <Typography variant="h3" component="h6">
          Login
        </Typography>
      </Grid>
      <Typography variant="h5" component="h6" sx={{margin:'16px'}}>
        To use the site's features, please enter your phone number and a
        verification code will be sent to your phone number.
      </Typography>

      <InputLabel htmlFor="outlined-adornment-amount"> Mobile number...</InputLabel>
           <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">0123456789</InputAdornment>}
            label="Enter your number..."
            value={mobile}
            onChange={(e) =>{setAlertShow(false); setMobile(e.target.value)}}
          />
      {/* <TextField
        type="number"
        label="Enter your mobile number..."
        variant="outlined"
        value={mobile}
        onChange={(e) =>{setAlertShow(false); setMobile(e.target.value)}}
      /> */}

      <Button variant="outlined" onClick={onSubmit} style={{width:'110px'}} endIcon={<SendIcon />}>
        Send...
      </Button>
      {alertShow && (
         <Stack sx={{ width: "100%" }} spacing={2}>
         <Alert severity="warning">  Your phone number is incorrect.</Alert>
       </Stack>
      )}
    </Grid>
  );
}
