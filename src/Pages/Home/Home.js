import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from '../../Components/Cards/Cards';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); 
  const [data,setData]=useState([])
  useEffect(()=>{
    const token =localStorage.getItem('token')
axios.get("http://localhost:8080/users/getData",{headers:{"Authorization": 'Bearer'+" "+ token}}).then((res)=>{
setData(res.data)

})
.catch((err)=>{
  console.log(err);
  if(err.status=401){
        localStorage.removeItem('token')
    localStorage.clear()
    navigate('/login')
  }
  
})
  },[])

  useEffect(()=>{
    console.log(data);
    
  },[data])

  return (
    <div className='d-flex flex-wrap gap-2' >{data.map((book)=><Cards book={book} key={book._id} />)} </div>
  )
}

export default Home