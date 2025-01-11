import { useQuery } from '@tanstack/react-query'
import { getCategories } from '../services/services'
import React from 'react'

export default function Adminpanel() {
  const {data , isLoading , error}=useQuery({queryKey:["get-category"],queryFn:()=>getCategories()});
  console.log(data , error)
  return (
    <div>
      Adminpanel
    </div>
  )
}
