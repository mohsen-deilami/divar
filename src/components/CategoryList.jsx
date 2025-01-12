import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategories } from "../services/services";
import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function CategoryList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["get-category"],
    queryFn: () => getCategories(),
  });
  console.log(data, error);
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
            <Typography
              variant="p"
              component="p"
              sx={{ marginTop: "10px", display: "block" }}
              >
              slug : {item.slug}
            </Typography>
          </Grid>
        ))}
    </Container>
  );
}
