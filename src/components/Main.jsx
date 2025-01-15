import React from 'react'
import Grid from "@mui/material/Grid2";
import { Typography } from '@mui/material';
export default function Main({posts}) {
    console.log(posts)
  return (
    <div>
      {posts?
      posts.data.posts.map(post=>(

<Grid key={post._id} sx={{display:'flex', justifyContent:'space-between', border:'2px solid #eaeaea' , borderRadius:'8px' , padding:'5px'}}>
    {console.log(post)}
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
       
</Grid>
      )):''}
    </div>
  )
}
