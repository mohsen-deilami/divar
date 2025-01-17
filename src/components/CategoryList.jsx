import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { deleteCategory, getCategories } from "../services/services";
import { Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { ToastContainer , toast } from "react-toastify";

export default function CategoryList() {
  const queryClient=useQueryClient();
  const { data, isLoading, error } = useQuery({
    queryKey: ["get-category"],
    queryFn: () => getCategories(),
  });
  const { mutate,  error:errerDelete, data:dataDeleted } = useMutation({
    mutationFn: deleteCategory,
  });
  const deleteHandler=id=>{
    mutate(id, {
      onSuccess: (data) => {queryClient.invalidateQueries({
        queryKey:["get-category"]
      })
     
        toast.success("The category successfully Deleted.", {
          position: "top-center",
        })

     
      
    },
      onError: (error) =>{  toast.warn("There was a problem with the program.", {
        position: "top-center",
      })} 
    });
  
  }
  return (
    <Container maxWidth="lg">
      {isLoading ? <p>Loading...</p> : ""}
      {data &&
        data.data.map((item) => (
          <Grid
            key={item._id}
            sx={{
              border: "2px solid #eaeaea",
              margin: "20px 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems:'center',
              padding: "10px 20px",
            }}
          >
            <Grid sx={{display:'flex' , alignItems:'center' , gap:'16px'}}>

            <img
              src={`${item.icon}.svg`}
              alt=""
              style={{ height: "25px", width: "25px" }}
              />
            <Typography
              variant="h5"
              component="h4"
              sx={{ marginTop: "10px", display: "block" }}
              >
              {item.name}
            </Typography>
            </Grid>
        <Grid sx={{display:'flex' , alignItems:'center'}}>

            <Typography
              variant="p"
              component="p"
             
              >
              slug : {item.slug}
            </Typography>
            <Button
          variant="outlined"
          style={{ width: "140px", margin: "20px 0 20px 20px" }}
          onClick={()=>deleteHandler(item._id)}
          >
          Delete...
        </Button>
      
               
                <ToastContainer />
          </Grid>
          </Grid>
        ))}
    
    </Container>
  );
}
