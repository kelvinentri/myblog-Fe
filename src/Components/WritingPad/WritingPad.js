import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function WritingPad({readOnly,theme,value, setValue}) {
    return <ReactQuill theme={theme}  readOnly={readOnly} value={value} onChange={setValue} />;
}

export default WritingPad