import React, { useState } from 'react'


export default function TextForm(props) {

    const handleTextClick = (event) => {
        
        if(text === "Enter text here"){
            setText(event.target.value = "");
        }
    }

    const handleUpClick = () => {
        let newText = text.toLocaleUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success")
    }
    
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success")
    }

    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!", "success")
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        // Because we have used navigator api therefore i have commented all other
        // let text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlert("Copied to Clipboard!", "success")
    }

    // Here we have used regex
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed!", "success")
    }

    const [text, setText] = useState('Enter text here');
    //   text = "new Text"; // Wrong way to change the state

    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1 className='mb-2'>{props.heading}</h1>
            <div className="mb-3 my-5">
                <textarea className="form-control" value={text} onChange={handleOnChange} onClick={handleTextClick} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',
                color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleUpClick}>Convert To Uppercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleLoClick}>Convert To Lowercase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleClear}>Clear Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>

        <div className="container my-5" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text Summary</h2>
            {/* <p>{text.split(" ").length} words, {text.length} characters</p> */}
            {/* Removing the 1 word when there is no word  */}
            <p>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words, {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length !== 0}).length} Minutes read </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"} </p>
        </div>
        </>
    )
}
