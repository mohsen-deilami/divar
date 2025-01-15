import React from 'react'
import Grid from "@mui/material/Grid2";
import { Typography } from '@mui/material';
export default function Sidebar({categories}) {
  console.log(categories)
  return (
    <div>
     {categories ?
     (
categories.data.map(category=>(
       <Grid key={category._id}>
      <Typography>
{category.name}
      </Typography>
      <img
              src={`${category.icon}.svg`}
              alt=""
              style={{ height: "25px", width: "25px" }}
              />
      
     </Grid>

))
    ):''
    }
    </div>
  )
}
