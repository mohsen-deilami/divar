import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllPosts } from '../services/services'
import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import { Container } from '@mui/material';
export default function Homepage() {
  const {data: posts , isLoading}=useQuery({queryKey: ["get-all-posts"],
    queryFn: () => getAllPosts()
})
console.log(posts)
  return (
    <Container maxWidth='lg'>
     <Sidebar/>
     <Main posts={posts}/>
    </Container>
  )
}
