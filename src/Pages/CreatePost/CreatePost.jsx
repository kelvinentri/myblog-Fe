import React, { useState } from 'react'
import WritingPad from '../../Components/WritingPad/WritingPad'

function CreatePost() {
    const [value,setValue]=useState('')
    const [file,setFile]=useState()

    const handleImage=(e)=>{
        setFile(e.target.files[0])
    }
  return (
    <>
        <input type="file" onChange={handleImage} accept='image/*' />
   {   file&&  <img src={URL.createObjectURL(file)} alt=""  width={200} height={200}/>}
<WritingPad value={value} setValue={setValue} theme={'snow'}/>
    </>
  )
}

export default CreatePost