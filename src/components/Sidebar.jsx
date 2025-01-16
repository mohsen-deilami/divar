import React from "react";
import Grid from "@mui/material/Grid2";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography } from "@mui/material";
export default function Sidebar({ categories }) {
  return (
    <div>
      
       
      
          <List 
          sx={{minWidth:'24px' , maxWidth: 360, bgcolor: 'background.paper' }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader" sx={{fontSize:'22px' , fontWeight:'bold'}}>
              Categories
            </ListSubheader>
          }
        >
          {categories &&
           categories.data.map((category) => (
          <ListItemButton key={category._id}>
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
    </div>
  );
}
