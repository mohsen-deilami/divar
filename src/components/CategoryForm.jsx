import React, { useState } from "react";
import {  Button, Container,  TextField, Typography  , Select} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { addCategory } from "../services/services";
import { useMutation } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';


export default function CategoryForm() {


    const [icon, setIcon] = useState('');

    const handleChange = (event) => {
        setIcon(event.target.value);
        setForm({...form , [event.target.name]:event.target.value}, icon);
        console.log(form)
    };

    const [form , setForm]=useState({name:"",slug:"",icon:""});
    const {mutate , isLoading , error, data}=useMutation({mutationFn: addCategory})
    const changeHandler=event=>{
        setForm({...form , [event.target.name]:event.target.value});
        console.log(form)
    }
    const submitHandler=event=>{
        event.preventDefault();
        mutate(form ,{onSuccess : data =>console.log(data) , onError : error => console.log(error)})
        console.log(form);
        
    }
  return (
    <Container maxWidth="lg">
      <form style={{marginTop:'32px'}} onChange={changeHandler} onSubmit={submitHandler}>
     

        <Typography variant="h4" component="h4" sx={{ marginTop: "10px" , display:'block'}}>
          Enter new Category
        </Typography>
        {data?.status === 201 && 
        (
         toast.success("New category successfully registered.", {
                  position: "top-center",
                })
            )

        }

        {!!error && (
         toast.warn("There was a problem with the program.", {
                  position: "top-center",
                })
            )
          
        }

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
      <FormControl sx={{ minWidth: '300px' }}>
        <InputLabel id="demo-simple-select-label">Icon</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="icon"
          name='icon'
          value={icon}
          label="Icon"
          onChange={handleChange}
        >
          <MenuItem value={'game'}>game</MenuItem>
          <MenuItem value={'home'}>home</MenuItem>
          <MenuItem value={'personal'}>personal</MenuItem>
          <MenuItem value={'profiile'}>profiile</MenuItem>
          <MenuItem value={'service'}>service</MenuItem>
        </Select>
      </FormControl>
      </Grid>
        <Button variant="outlined"  style={{width:'140px' , marginTop:'10px' , marginBottom:'20px'}} onClick={submitHandler}>
        Create...
      </Button>
      <ToastContainer />
      </form>
    </Container>
  );
}
