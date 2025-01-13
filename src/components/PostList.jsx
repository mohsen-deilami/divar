import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getMyPosts } from '../services/services';

export default function PostList() {
    const {data , isLoading , error}=useQuery( {queryKey: ["my-posts"],
        queryFn: () => getMyPosts()
    });
   
    console.log(data, error)
  return (
    <div>
      
    </div>
  )
}
