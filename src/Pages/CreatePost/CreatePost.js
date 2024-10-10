import React, { useEffect, useState } from "react";
import WritingPad from "../../Components/WritingPad/WritingPad";
import { AxiosInstance } from "../../Config/AxiosInsatnce";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const [value, setValue] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const naviagate=useNavigate()
  const handleFile = (e) => {
    setImageFile(e.target.files[0]);
  };
  const createPost = async () => {
    try {
      if (value) {
        let  filePath=null
        if (imageFile) {
          const formDataImage = new FormData();
          formDataImage.append("image", imageFile);
           filePath = await AxiosInstance({
            url: "/posts/addimage",
            method: "POST",
            data: formDataImage,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
        }
 AxiosInstance({
    url:'/posts/createPost',
    method:'post',
    data:{
        text:value,
        image:filePath.data
    }
 }).then((res)=>{
  naviagate('/')
 })
 .catch(err=>{
    console.log(err);
    
 })


      } else {
        alert("no data");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <WritingPad
        readOnly={false}
        theme={"snow"}
        value={value}
        setValue={setValue}
      />
      <input type="file" onChange={handleFile} accept="image/*" />
      {imageFile && (
        <img
          src={URL?.createObjectURL(imageFile)}
          alt=""
          width={"300px"}
          height={"300px"}
        />
      )}
      <button onClick={createPost}>create Post</button>
    </div>
  );
}

export default CreatePost;
