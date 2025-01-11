import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { getCategories } from '../services/services';

export default function CategoryList() {
    const {data , isLoading , error}=useQuery({queryKey:["get-category"],queryFn:()=>getCategories()});
     console.log(data , error)
  return (
    <div>
      
    </div>
  )
}
