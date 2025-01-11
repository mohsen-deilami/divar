import React from 'react'
import { Container } from '@mui/material';
import CategoryForm from '../components/CategoryForm';
import CategoryList from '../components/CategoryList';

export default function Adminpanel() {
  
 
  return (
    <Container maxWidth="xl">
      <CategoryList/>
      <CategoryForm/>
    </Container>
  )
}
