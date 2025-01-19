import React from "react";
import Grid from "@mui/material/Grid2";
import {
  Avatar,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
export default function Main({ posts, categories }) {
  return (
    <div>
      {posts?.data ? (
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginLeft: "32px",
          }}
        >
          {categories
            ? posts.data.posts.map((post) => (
                <Grid
                  style={{
                    width: "340px",
                    border: "2px solid #eaeaea",
                    borderRadius: "8px",
                    padding: "5px",
                    marginTop: "16px",
                  }}
                  key={post._id}
                >
                  {categories.data.map(
                    (category) =>
                      post.category === category._id && (
                        <CardHeader
                          key={category._id}
                          avatar={
                            <Avatar aria-label="recipe">
                              <img
                                src={`${category.icon}.svg`}
                                alt=""
                                style={{ height: "25px", width: "25px" }}
                              />
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title={post.options.title}
                          subheader={post.createdAt.slice(0, 10)}
                        />
                      )
                  )}

                  <CardMedia
                    component="img"
                    height="194"
                    image={`http://localhost:3400/${post.images[0]}`}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {post.options.content?.slice(0, 10)}
                    </Typography>
                    <Typography
                      component="p"
                      variant="p"
                      sx={{ margin: "20px 0" }}
                    >
                      {post.options.city}
                    </Typography>
                  </CardContent>
                </Grid>
              ))
            : ""}
        </Container>
      ) : (
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginLeft: "32px",
          }}
        >
          {categories
            ? posts.map((post) => (
                <Grid
                  style={{
                    width: "340px",
                    border: "2px solid #eaeaea",
                    borderRadius: "8px",
                    padding: "5px",
                    marginTop: "16px",
                  }}
                  key={post._id}
                >
                  {categories.data.map(
                    (category) =>
                      post.category === category._id && (
                        <CardHeader
                          key={category._id}
                          avatar={
                            <Avatar aria-label="recipe">
                              <img
                                src={`${category.icon}.svg`}
                                alt=""
                                style={{ height: "25px", width: "25px" }}
                              />
                            </Avatar>
                          }
                          action={
                            <IconButton aria-label="settings">
                              <MoreVertIcon />
                            </IconButton>
                          }
                          title={post.options.title}
                          subheader={post.createdAt.slice(0, 10)}
                        />
                      )
                  )}

                  <CardMedia
                    component="img"
                    height="194"
                    image={`http://localhost:3400/${post.images[0]}`}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {post.options.content?.slice(0, 10)}
                    </Typography>
                    <Typography
                      component="p"
                      variant="p"
                      sx={{ margin: "20px 0" }}
                    >
                      {post.options.city}
                    </Typography>
                  </CardContent>
                </Grid>
              ))
            : ""}
        </Container>
      )}
    </div>
  );
}
