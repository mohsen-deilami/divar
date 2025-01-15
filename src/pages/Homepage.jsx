import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllPosts, getCategories } from '../services/services'
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import { Container } from '@mui/material';
export default function Homepage() {
  const {data: posts , isLoading}=useQuery({queryKey: ["get-all-posts"],
    queryFn: () => getAllPosts()
})
const { data:categories } = useQuery({
  queryKey: ["get-category"],
  queryFn: () => getCategories(),
});

  return (
    <Container maxWidth='lg' sx={{display:'flex'}}>
     <Sidebar categories={categories}/>
     <Main posts={posts} categories={categories}/>
    </Container>
  )
}
