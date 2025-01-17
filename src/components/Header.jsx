import React from "react";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Person3Icon from "@mui/icons-material/Person3";
import Grid from "@mui/material/Grid2";
import { Link } from "react-router-dom";

export default function Header() {
  return (

      <Container maxWidth="xl">
    
          <Grid container sx={{display:'flex' , justifyContent:'space-between', padding:'16px' , borderBottom: "2px solid gray"}}>
            <Grid sx={{display:'flex' , alignItems:'center'  }}> 
          <Link to='/'>
               <Typography variant="h4" component="h4" sx={{ marginRight:'10px'}}
           
           >
            Divar
          </Typography>
            </Link>
          <AddLocationAltIcon/>
         
          <Typography variant="h6" component="div" sx={{marginLeft:'5px'}} >
            Koeln
          </Typography>
          </Grid>

            <Grid sx={{display:'flex' , alignItems:'center'  }}>
              <Link to='/admin'>
            <Typography variant="p" component="div" >
           Admin Panel
          </Typography>
              </Link>
           <Person3Icon  />
              <Link to='/dashboard' style={{marginLeft:'16px'}}>
              <Button variant="contained" >
          
              Register an ad
          </Button>
              </Link>
            </Grid>
          </Grid>
        

  
      </Container>

  );
}
