import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import {  List, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
export default function Sidebar({ categories , selectHandler}) {


  return (
   
                   
          <List 
          sx={{ maxWidth: '360px', bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader"
             sx={{fontSize:'22px' , fontWeight:'bold' , marginBottom:'16px' ,borderBottom:'2px solid #eaeaea'}}>
              Categories
            </ListSubheader>
          }
        >
          <ListItemButton style={{width:'200px'}}>
            <ListItemIcon>
          <AddToQueueIcon/>
            </ListItemIcon>
            <ListItemText primary="All" onClick={()=>selectHandler('all')}/>
          </ListItemButton>
          {categories &&
           categories.data.map((category) => (
          <ListItemButton key={category._id} style={{width:'200px'}} onClick={()=>selectHandler(category._id)}>
            <ListItemIcon>
            <img
              src={`${category.icon}.svg`}
              alt=""
              style={{ height: "25px", width: "25px" }}
            />
            </ListItemIcon>
            <ListItemText primary={category.name} />
          </ListItemButton>
         
         
        
         
        ))}
        </List>
   
  );
}
