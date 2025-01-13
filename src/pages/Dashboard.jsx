import React from 'react'
import { Container , Typography } from '@mui/material'
import AddPost from '../components/AddPost'
import PostList from '../components/PostList'
export default function Dashboard() {
  return (
   <Container maxWidth='lg'>
      <AddPost/>
      <PostList/>
    </Container>
  )
}
