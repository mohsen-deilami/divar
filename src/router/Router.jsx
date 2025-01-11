import React from 'react'
import { Routes , Route, Navigate } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Dashboard from '../pages/Dashboard'
import Adminpanel from '../pages/Adminpanel'
import NotfoundPage from '../pages/NotfoundPage'
import AuthPage from '../pages/AuthPage'
import { getProfile } from '../services/services'
import { useQuery } from '@tanstack/react-query'

export default function Router() {
  const {data , isLoading , error}=useQuery({queryKey:["profile"],queryFn:()=> getProfile().then(res => res || false)});

  if(isLoading) return <h1>Loading...</h1>
  return (
    <Routes>
        <Route index element={<Homepage/>}></Route>
        <Route path='dashboard' element={data ? <Dashboard/> : <Navigate to='/auth'/>}></Route>
        <Route path='auth' element={data ? <Navigate to='/' /> : <AuthPage/>}></Route>
        <Route path='admin' element={data && data.data.role === 'ADMIN' ? <Adminpanel/> : <Navigate to='/'/>}></Route>
        <Route path='*' element={<NotfoundPage/>}></Route>
      
    </Routes>
  )
}
