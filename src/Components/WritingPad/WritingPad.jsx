import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function WritingPad({value,setValue, theme}) {

  return (
    <div>

         <ReactQuill
        className=""
        theme={theme}
        value={value}
        onChange={(value) => setValue(value)}
      />
    </div>
  )
}

export default WritingPad
