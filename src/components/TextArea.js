import React, { useState } from 'react'

export default function TextArea(props) {

    const [text, setText] = useState('');

    const onChangeEvent = (event) => {
        setText(event.target.value);
    }

    const ClearAll = () => {
        setText("");
    }

    const convertToUppercase = () => {
        setText(text.toUpperCase());
    }

    const convertToLowercase = () => {
        setText(text.toLowerCase());
    }

    return (
        <>
            <div className={`container my-3`}>
                <h1>
                    Enter Your Text To Analyze
                    <button className='btn btn-danger ms-3' onClick={ClearAll}>Clear</button>
                </h1>
                <textarea name="" id="" className='form-control' value={text} onChange={onChangeEvent}></textarea>
                <br />
                <button className="btn btn-info" onClick={convertToUppercase}>Convert To Uppercase</button>
                <button className="btn btn-info ms-2" onClick={convertToLowercase}>Convert To Lowercase</button>
                <br /> <br />
                <h3>Text Summary</h3>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter Any Text To Show Here"}</p>
            </div>
        </>
    )
}




