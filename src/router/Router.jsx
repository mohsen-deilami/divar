import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Dashboard from '../pages/Dashboard'
import Adminpanel from '../pages/Adminpanel'
import NotfoundPage from '../pages/NotfoundPage'
import AuthPage from '../pages/AuthPage'
import { getProfile } from '../services'
import { useQuery } from '@tanstack/react-query'

export default function Router() {
  const {data , isLoading , error}=useQuery({queryKey:["profile"],queryFn: getProfile});
  console.log(data);
  return (
    <Routes>
        <Route index element={<Homepage/>}></Route>
        <Route path='dashboard' element={<Dashboard/>}></Route>
        <Route path='auth' element={<AuthPage/>}></Route>
        <Route path='admin' element={<Adminpanel/>}></Route>
        <Route path='*' element={<NotfoundPage/>}></Route>
      
    </Routes>
  )
}
