import { useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/Router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import defaultOptions from './configs/reactQuery'

function App() {
const queryClient=new QueryClient({defaultOptions})
  return (
    <QueryClientProvider client={queryClient}>

    <BrowserRouter>
      <Router/>
      <ReactQueryDevtools/>
      </BrowserRouter>
    </QueryClientProvider>
    )
}

export default App
