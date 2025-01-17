import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllPosts, getCategories } from '../services/services'
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import { Container } from '@mui/material';
export default function Homepage() {
  const {data: posts , isLoading}=useQuery({queryKey: ["get-all-posts"],
    queryFn: () => getAllPosts()
})
const [displayed, setDisplayed]=useState({});
const { data:categories } = useQuery({
  queryKey: ["get-category"],
  queryFn: () => getCategories(),
});

const selectHandler=categoryID=>{
  if(categoryID === 'all '){
setDisplayed(posts)
  }
  else {

    const displayedPosts=posts.data.posts.filter(post =>post.category === categoryID);
    setDisplayed(displayedPosts)
  }
 
 }

  return (
    <Container maxWidth='lg' sx={{display:'flex' , marginTop:'32px' , marginBottom:'32px'}}>
     <Sidebar categories={categories} selectHandler={selectHandler}/>
     <Main posts={displayed.length ? displayed : posts } categories={categories}/>
    </Container>
  )
}
