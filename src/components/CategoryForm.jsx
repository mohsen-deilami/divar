import React, { useState } from "react";
import { Button, Container, TextField, Typography  } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { addCategory } from "../services/services";
import { useMutation } from "@tanstack/react-query";

export default function CategoryForm() {
    const [form , setForm]=useState({name:"",slug:"",icon:""});
    const {mutate , isLoading , error, data}=useMutation({mutationFn: addCategory})
    const changeHandler=event=>{
        setForm({...form , [event.target.name]:event.target.value});
    }
    const submitHandler=event=>{
        event.preventDefault();
        mutate(form ,{onSuccess : data =>console.log(data) , onError : error => console.log(error)})
        console.log(form);
        
    }
  return (
    <Container>
      <form style={{marginTop:'32px'}} onChange={changeHandler} onSubmit={submitHandler}>
     

        <Typography variant="h4" component="h4" sx={{ marginTop: "10px" , display:'block'}}>
          Enter new Category
        </Typography>
      <Grid sx={{ display:'block' , marginTop:'20px' }}>


        <TextField sx={{ width:'300px'}}
          type="text"
          label="Enter the name number..."
          variant="outlined"
          name="name"
          id="name"
          />
          </Grid>
          <Grid sx={{ display:'block' , marginTop:'10px' }}>
        <TextField sx={{ width:'300px'}}
          type="text"
          label="Enter the slug..."
          variant="outlined"
          name="slug"
          id="slug"

        />
          </Grid>
         <Grid sx={{ display:'block' , marginTop:'10px' }}>
        <TextField sx={{ width:'300px'}}
          type="text"
          label="Enter the icon..."
          variant="outlined"
          name="icon"
          id="icon"
         
        />
          </Grid>
        <Button variant="outlined"  style={{width:'140px' , marginTop:'10px' , marginBottom:'20px'}} onClick={submitHandler}>
        Create...
      </Button>
      </form>
    </Container>
  );
}
