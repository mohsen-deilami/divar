import React from "react";
import Grid from "@mui/material/Grid2";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ExpandMore, Margin } from "@mui/icons-material";
export default function Main({ posts, categories }) {
  return (
    <Container maxWidth='lg' sx={{display: 'flex',  alignItems: 'center', justifyContent: 'space-between',  flexWrap: 'wrap' , marginLeft:'32px'}}>
      {posts && categories
        ? posts.data.posts.map((post) => (
            <Grid style={{width:'340px', border:'2px solid #eaeaea' , borderRadius:'8px' , padding:'5px' , marginTop:'16px'}} key={post._id}>
             
              {categories.data.map(
                (category) =>
                  post.category === category._id && (
                    <CardHeader key={category._id}
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
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {post.options.content?.slice(0 , 10)}
                </Typography>
                <Typography component="p" variant="p" sx={{ margin: "20px 0" }}>
           {post.options.city}
          </Typography>
              </CardContent>
           
            </Grid>

            /* <Grid key={post._id} sx={{display:'flex', justifyContent:'space-between', border:'2px solid #eaeaea' , borderRadius:'8px' , padding:'5px'}}>
 
<Grid >

        <img src={ `http://localhost:3400/${post.images[0]}` } alt="" />
</Grid>
<Grid >
    <Grid>

<Typography component="h5" variant="h5" sx={{ margin: "20px 0" }}>
           {post.options.title}
          </Typography>
<Typography component="p" variant="p" sx={{ margin: "20px 0" }}>
           {post.options.city}
          </Typography>
    </Grid>
<Typography component="p" variant="p" sx={{ margin: "20px 0" }}>
           {post.amount} $
          </Typography>
</Grid>
       
</Grid> */
          ))
        : ""}
    </Container>
  );
}
