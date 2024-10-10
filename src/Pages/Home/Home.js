import React, { useEffect, useState } from 'react'
import { AxiosInstance } from '../../Config/AxiosInsatnce'
import BlogCard from '../../Components/BlogCard/BlogCard'

function Home() {
  const [blogData,setBlogData]=useState([])
  useEffect(()=>{
    fetchblogData()
  },[])
  const fetchblogData=()=>{
    AxiosInstance.get('posts/getBlogData').then((res)=>{
      setBlogData(res.data)
  

    })
    .catch((err)=>{

    })
  }
  return (
    <>
    {blogData.map((blog)=> <BlogCard key={blog._id} data={blog}/>)}

    </>
  )
}

export default Home