import React, { useState } from 'react'
import { Container , Typography , TextField, 
    Select, 
    FormControl,
    InputLabel,
    MenuItem,
    Button,
    OutlinedInput,
    InputAdornment} from '@mui/material'
import Grid from "@mui/material/Grid2";
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../services/services';

export default function AddPost() {
    const [category , setCategory]=useState('');
    const selectHandler=evet =>{
        setCategory(evet.target.value)
        console.log(category)
    }
    const submitHandler=()=>{
        console.log('sub,it')
    }

    const { data } = useQuery({
        queryKey: ["get-category"],
        queryFn: () => getCategories(),
      });
       
  return (
    <Container maxWidth='lg'>
        <Grid>

      <Typography component='h3' variant='h3' sx={{ margin: "20px 0"}}>  Register a new ad</Typography>
        </Grid>
       
        <Grid sx={{ display: "block", marginTop: "20px" }}>
          <TextField
            sx={{ width: "300px" }}
            type="text"
            label="Enter the title..."
            variant="outlined"
            name="title"
            id="title"
          />
        </Grid>
        <Grid sx={{ display: "block", marginTop: "20px" }}>
          <TextField
            sx={{ width: "300px" }}
            type="text"
            multiline
          minRows={4}
            label="Enter the content..."
            variant="outlined"
            name="content"
            id="content"
          />
        </Grid>
        <Grid sx={{ display: "block", marginTop: "20px" }}>
         {/*  <TextField
            sx={{ width: "300px" }}
            type="number"
            label="Enter the price..."
            variant="outlined"
            name="amount"
            id="amount"
          /> */}
          <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
           <OutlinedInput   sx={{ width: "300px" }}
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </Grid>
        <Grid sx={{ display: "block", marginTop: "20px" }}>
          <TextField
            sx={{ width: "300px" }}
            type="text"
            label="Enter the City ..."
            variant="outlined"
            name="city"
            id="city"
          />
        </Grid>
        <Grid sx={{ display: "block", marginTop: "20px" }}>
          <TextField
            sx={{ width: "300px" }}
            type="file"
           
            variant="outlined"
            name="city"
            id="city"
          />
        </Grid>
        <Grid sx={{ display: "block", marginTop: "10px" }}>
       
    <label htmlFor="category" style={{display:'block' , marginBottom:'8px'}}>Category</label>
            <select
       style={{width:'300px' , height:'56px'}}
              id="category"
              name="category"
          
              value={category}
     
      
              onChange={selectHandler}
            >
                {data?.data.map(item=>(
                    <option  key={item._id} value={item._id} >{item.name}</option >

                ))}
            
            </select>
         
        </Grid>
        
        <Button
          variant="outlined"
          style={{ width: "140px", marginTop: "20px", marginBottom: "20px" }}
          onClick={submitHandler}
        >
          Create...
        </Button>
    </Container>
  )
}
