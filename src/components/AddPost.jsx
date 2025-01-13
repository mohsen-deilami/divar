import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  InputLabel,
  Button,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/services";
import { getCookie } from "../utils/cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

export default function AddPost() {
  const [category, setCategory] = useState("");
  const [form, setForm] = useState({
    title: "",
    content: "",
    amount: "",
    city: "",
    image: "",
    category: "",
  });

  const { data } = useQuery({
    queryKey: ["get-category"],
    queryFn: () => getCategories(),
  });
  const selectHandler = (evet) => {
    setCategory(evet.target.value);
  };
  const submitHandler = () => {
    const formData = new FormData();
    for (let i in form) {
      formData.append(i, form[i]);
    }
    const token = getCookie("accessToken");
    axios
      .post("http://localhost:3400/post/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",

          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Successfully add new post!");
      })
      .catch((error) => toast.warn(error.message));
  };

  const changeHandler = (event) => {
    if (event.target.name !== image) {
      setForm({ ...form, [event.target.name]: event.target.value });
    } else {
      setForm({ ...form, [event.target.name]: event.target.files[0] });
    }
  };
  return (
    <Container maxWidth="lg">
      <form onChange={changeHandler}>
        <Grid>
          <Typography component="h3" variant="h3" sx={{ margin: "20px 0" }}>
            Register a new ad
          </Typography>
        </Grid>

        <Grid sx={{ display: "block", marginTop: "20px" }}>
          <label
            htmlFor="title"
            style={{ display: "block", margin: "16px 0 5px 0" }}
          >
            Title
          </label>
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
          <label
            htmlFor="content"
            style={{ display: "block", margin: "16px 0 5px 0" }}
          >
            content
          </label>
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
          <InputLabel
            htmlFor="outlined-adornment-amount"
            style={{ marginBottom: "14px" }}
          >
            Price
          </InputLabel>
          <OutlinedInput
            sx={{ width: "300px" }}
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
            name="amount"
          />
        </Grid>
        <Grid sx={{ display: "block", marginTop: "20px" }}>
          <label
            htmlFor="city"
            style={{ display: "block", margin: "16px 0 5px 0" }}
          >
            City
          </label>
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
          <label
            htmlFor="image"
            style={{ display: "block", margin: "16px 0 5px 0" }}
          >
            Picture
          </label>
          <TextField
            sx={{ width: "300px" }}
            type="file"
            variant="outlined"
            name="image"
            id="image"
          />
        </Grid>
        <Grid sx={{ display: "block", marginTop: "10px" }}>
          <label
            htmlFor="category"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Category
          </label>
          <select
            style={{ width: "300px", height: "56px" }}
            id="category"
            name="category"
            value={category}
            onChange={selectHandler}
          >
            {data?.data.map((item) => (
              <option key={item._id} value={item._id}>
                {item.name}
              </option>
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
        <ToastContainer position="top-center" reverseOrder={true} />
      </form>
    </Container>
  );
}
