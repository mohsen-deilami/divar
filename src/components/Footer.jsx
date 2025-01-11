import React from "react";
import { Container, Typography } from "@mui/material";
export default function Footer() {
  return (
    <Container maxWidth="xl">
      <Typography
        component="p"
        variant="p"
        color="primary"
        sx={{
          padding: "20px",
          borderTop: "2px solid gray",
          padding: "10px",
           textAlign:"center",
           fontWeight:'900'
        }}
       
      >
        Developed By Mohsen Deilami ❤
      </Typography>
    </Container>
  );
}
