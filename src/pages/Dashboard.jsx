import React from 'react'
import { Container , Typography } from '@mui/material'
import AddPost from '../components/AddPost'
export default function Dashboard() {
  return (
   <Container maxWidth='lg'>
      <AddPost/>
    </Container>
  )
}
