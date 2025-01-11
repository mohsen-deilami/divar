import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { getCategories } from '../services/services';
import { Container } from '@mui/material';
import Grid from "@mui/material/Grid2";

export default function CategoryList() {
    const {data , isLoading , error}=useQuery({queryKey:["get-category"],queryFn:()=>getCategories()});
     console.log(data , error)
  return (
    <Container maxWidth="lg">
      {isLoading ? <p>Loading...</p> :''}
     {data && data.data.map(item =>(

<Grid key={item._id}>
<h5>{item.name}</h5>
<p>{item.slug}</p>
</Grid>        
     ))}
    </Container>
  )
}
