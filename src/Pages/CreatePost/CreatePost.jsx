import React, { useEffect, useState } from 'react'
import WritingPad from '../../Components/WritingPad/WritingPad'
import { AxiosInstance } from '../../config/axiosConfig'
import { Navigate, useNavigate } from 'react-router-dom'

function CreatePost() {
    const [value,setValue]=useState('')
    const [file,setFile]=useState()
const navigate=useNavigate()
    useEffect(()=>{

    },[value])
    const handleImage=(e)=>{
        setFile(e.target.files[0])
    }
    const handleCreate=async ()=>{
let imagePath=undefined
if(file){
const formaDataImage= new FormData()
formaDataImage.append('img', file)
imagePath = await AxiosInstance({
  url:'/posts/addImage',
  method:'post',
  data:formaDataImage,
  headers:{
    "Content-Type":"multipart/form-data"
  }
})
}

      AxiosInstance.post('/posts/createpost',{content:value,imagePath:imagePath?.data?.path}).then((res)=>{
        navigate('/')
      })
    }
  return (
    <>
        <input type="file" onChange={handleImage} accept='image/*' />
   {   file&&  <img src={URL.createObjectURL(file)} alt=""  width={200} height={200 }/>}
<WritingPad value={value} setValue={setValue} theme={'snow'} readOnly={false}/>
<button onClick={handleCreate}>create post</button>
    </>
  )
}

export default CreatePost