import React from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getMyPosts } from "../services/services";
import { Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { deleteCookie } from "../utils/cookie";
import { useNavigate } from "react-router-dom";
export default function PostList() {
  const { data, isLoading } = useQuery({
    queryKey: ["my-posts"],
    queryFn: () => getMyPosts(),
  });
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const exitHandler = () => {
    deleteCookie();
    queryClient.invalidateQueries({
      queryKey: ["profile"],
    });
    navigate("/");
  };
  return (
    <Container maxWidth="lg">
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <Grid>
            <Typography component="h3" variant="h3" sx={{ margin: "20px 0" }}>
              My post lists...
            </Typography>
          </Grid>
          {data
            ? data.data.posts.map((post) => (
                <Grid
                  key={post._id}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    border: "2px solid #eaeaea",
                    padding: "10px",

                    my: "36px",
                    borderRadius: "5px",
                  }}
                >
                  <Grid
                    size={{ xs: 12, sm: 6, md: 8 }}
                    sx={{
                      my: "10px",
                      height: "80px",
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                    }}
                  >
                    <Grid sx={{ padding: "10px" }}>
                      <img
                        src={`http://localhost:3400/${post.images[0]}`}
                        alt=""
                        style={{ width: "90px", height: "75px" }}
                      />
                    </Grid>
                    <Grid>
                      <Typography
                        component="h5"
                        variant="h5"
                        sx={{ margin: "20px 0" }}
                      >
                        {post.options.title}
                      </Typography>

                      <Typography
                        component="p"
                        variant="p"
                        sx={{
                          whiteSpace: "npwrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          margin: "20px 0",
                          width: "560px",
                        }}
                      >
                        {post.options.content?.slice(0, 70)}...
                      </Typography>
                    </Grid>
                  </Grid>

                  <Grid size={{ xs: 12, sm: 6, md: 4 }}>
                    <Grid>
                      <Typography
                        component="p"
                        variant="p"
                        sx={{ margin: "20px 0" }}
                      >
                        Price : {post.amount} $
                      </Typography>
                    </Grid>
                    <Grid>
                      <Typography
                        component="p"
                        variant="p"
                        sx={{ margin: "20px 0" }}
                      >
                        Date : {post.createdAt.slice(0, 10)}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              ))
            : ""}
        </>
      )}
      <Button
        variant="outlined"
        style={{ width: "140px", marginTop: "20px", marginBottom: "20px" }}
        onClick={exitHandler}
      >
        Exit
      </Button>
    </Container>
  );
}
