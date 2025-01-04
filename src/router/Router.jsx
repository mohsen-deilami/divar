import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Homepage from '../pages/Homepage'
import Dashboard from '../pages/Dashboard'
import Adminpanel from '../pages/Adminpanel'
import NotfoundPage from '../pages/NotfoundPage'
import AuthPage from '../pages/AuthPage'

export default function Router() {
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
