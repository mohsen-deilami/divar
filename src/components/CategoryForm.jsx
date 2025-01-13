import React, { useState } from "react";
import {
  Button,
  Container,
  TextField,
  Typography,
  Select,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { addCategory } from "../services/services";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast, ToastContainer } from "react-toastify";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

export default function CategoryForm() {
  const [icon, setIcon] = useState("");
  const queryClient=useQueryClient();
  const [form, setForm] = useState({ name: "", slug: "", icon: "" });
  const selectHandler = (event) => {
    setIcon(event.target.value);
    setForm({ ...form, [event.target.name]: event.target.value }, icon);
   
  };

  const { mutate,  error, data } = useMutation({
    mutationFn: addCategory,
  });
  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });

  };
  const submitHandler = (event) => {
    event.preventDefault();
    mutate(form, {
      onSuccess: (data) => queryClient.invalidateQueries({
        queryKey:["get-category"]
      }),
      onError: (error) => console.log(error),
    });
   
  };
  return (
    <Container maxWidth="lg">
      <form 
        style={{ marginTop: "32px" }}
        onChange={changeHandler}
        onSubmit={submitHandler}
      >
        <Typography
          variant="h4"
          component="h4"
          sx={{ margin: "20px 0", display: "block" }}
        >
          Enter new Category
        </Typography>
        {data?.status === 201 &&
          toast.success("New category successfully registered.", {
            position: "top-center",
          })}

        {!!error &&
          toast.warn("There was a problem with the program.", {
            position: "top-center",
          })}

        <Grid sx={{ display: "block", marginTop: "20px" }}>
          <TextField
            sx={{ width: "300px" }}
            type="text"
            label="Enter the name ..."
            variant="outlined"
            name="name"
            id="name"
          />
        </Grid>

        <Grid sx={{ display: "block", marginTop: "10px" }}>
          <TextField
            sx={{ width: "300px" }}
            type="text"
            label="Enter the slug..."
            variant="outlined"
            name="slug"
            id="slug"
          />
        </Grid>

        <Grid sx={{ display: "block", marginTop: "10px" }}>
          <FormControl sx={{ minWidth: "300px" }}>
            <InputLabel id="demo-simple-select-label">Icon</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="icon"
              name="icon"
              value={icon}
              label="Icon"
              onChange={selectHandler}
            >
              <MenuItem value={"game"}>game</MenuItem>
              <MenuItem value={"home"}>home</MenuItem>
              <MenuItem value={"personal"}>personal</MenuItem>
              <MenuItem value={"profiile"}>profiile</MenuItem>
              <MenuItem value={"service"}>service</MenuItem>
              <MenuItem value={"digital"}>Digital</MenuItem>
              <MenuItem value={"car"}>Car</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Button
          variant="outlined"
          style={{ width: "140px", marginTop: "20px", marginBottom: "20px" }}
          onClick={submitHandler}
        >
          Create...
        </Button>
        <ToastContainer />
      </form>
    </Container>
  );
}
