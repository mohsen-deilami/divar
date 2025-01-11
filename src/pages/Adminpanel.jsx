import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../services/services'
import React from 'react'
import { Container } from '@mui/material';
import CategoryForm from '../components/CategoryForm';

export default function Adminpanel() {
  const {data , isLoading , error}=useQuery({queryKey:["get-category"],queryFn:()=>getCategories()});
  console.log(data , error)
  return (
    <Container maxWidth="xl">
      <CategoryForm/>
    </Container>
  )
}
