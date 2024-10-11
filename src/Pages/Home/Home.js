import React, { useEffect, useState } from 'react'
import { AxiosInstance } from '../../Config/AxiosInsatnce'
import BlogCard from '../../Components/BlogCard/BlogCard'
import PaginationBox from '../../Components/PaginationBox/PaginationBox'
import { useNavigate, useParams } from 'react-router-dom'

function Home() {
  const [blogData,setBlogData]=useState({blogs:[]})
  const [totalCount,SettotalCount]=useState(0)
  const {pageNo}=useParams()
  const navigate=useNavigate();
  const perPage=1
  
  useEffect(()=>{
    fetchblogData()
  },[pageNo])
  const fetchblogData=()=>{
    AxiosInstance.get(`posts/getBlogData?pageNo=${pageNo ?? 1}&perPage=${perPage}`).then((res)=>{
      setBlogData(res.data[0])
      SettotalCount(res.data[0].totalCount[0].totalCount)
    })
    .catch((err)=>{

    })
  }
  const nextPage=(newPageNumber)=>{
    setBlogData({blogs:[]
    })
    navigate(`/${newPageNumber}`)
  }
  return (
    <>
    {blogData.blogs.map((blog)=> <BlogCard key={blog._id} data={blog}/>)}
    <div className='w-100 d-flex justify-content-center mt-2'>  

    <PaginationBox nextPage={nextPage} pageNo={parseInt(pageNo) ?? 1} maxPageNo={Math.ceil(totalCount/perPage)}/>
    </div>
    </>
  )
}

export default Home