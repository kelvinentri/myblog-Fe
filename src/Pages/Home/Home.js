import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../../Components/Cards/Cards';
import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../../config/axiosConfig';

function Home() {
  const navigate = useNavigate(); 
  const [data,setData]=useState([])
  useEffect(()=>{
    getData()
  },[])

  useEffect(()=>{
    console.log(data);
    
  },[data])

  const getData=()=>{
    AxiosInstance.get(`/users/getData`,).then((res)=>{
setData(res.data)
})
.catch((err)=>{
  console.log(err);
})
  }
  return (
    <div className='d-flex flex-wrap gap-2' >{data.map((book)=><Cards book={book} key={book._id} />)} </div>
  )
}

export default Home