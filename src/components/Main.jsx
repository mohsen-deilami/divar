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
  IconButton,
  Typography,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ExpandMore } from "@mui/icons-material";
export default function Main({ posts, categories }) {
  return (
    <div style={{display:'flex'}}>
      {posts && categories
        ? posts.data.posts.map((post) => (
            <Card sx={{ maxWidth: 345 }} key={post._id}>
              <div></div>
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
                  {post.options.content}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <ExpandMore aria-label="show more">
                  <ExpandMoreIcon />
                </ExpandMore>
              </CardActions>
              <Collapse timeout="auto" unmountOnExit>
                <CardContent>
                  <Typography sx={{ marginBottom: 2 }}>Method:</Typography>
                  <Typography sx={{ marginBottom: 2 }}>
                    Heat 1/2 cup of the broth in a pot until simmering, add
                    saffron and set aside for 10 minutes.
                  </Typography>
                  <Typography sx={{ marginBottom: 2 }}>
                    Heat oil in a (14- to 16-inch) paella pan or a large, deep
                    skillet over medium-high heat. Add chicken, shrimp and
                    chorizo, and cook, stirring occasionally until lightly
                    browned, 6 to 8 minutes. Transfer shrimp to a large plate
                    and set aside, leaving chicken and chorizo in the pan. Add
                    pimentón, bay leaves, garlic, tomatoes, onion, salt and
                    pepper, and cook, stirring often until thickened and
                    fragrant, about 10 minutes. Add saffron broth and remaining
                    4 1/2 cups chicken broth; bring to a boil.
                  </Typography>
                  <Typography sx={{ marginBottom: 2 }}>
                    Add rice and stir very gently to distribute. Top with
                    artichokes and peppers, and cook without stirring, until
                    most of the liquid is absorbed, 15 to 18 minutes. Reduce
                    heat to medium-low, add reserved shrimp and mussels, tucking
                    them down into the rice, and cook again without stirring,
                    until mussels have opened and rice is just tender, 5 to 7
                    minutes more. (Discard any mussels that don&apos;t open.)
                  </Typography>
                  <Typography>
                    Set aside off of the heat to let rest for 10 minutes, and
                    then serve.
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>

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
    </div>
  );
}
