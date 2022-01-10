import React, { useState } from 'react';

export default function TextForm(props) {
    // const [text, setText] = useState("enter text here");
    const [text, setText] = useState('');
    // text = "new text"; // wrong way to change the state
    // setText("new text"); // correct way to change the state
    const upperCase = () => {
        // console.log("upper case was clicked:" + text);
        let newText = text.toUpperCase();
        // setText("you have clicked on handleUpClick");
        setText(newText);
        props.showAlert("converted to upperCase", "success");
    }
    const lowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowerCase", "success");
    }
    const clearText = () => {
        let newText = '';
        setText(newText);
        props.showAlert("text cleared", "success");
    }
    const copyText = () => {
        // var text = document.getElementById("mybox");
        // text.select(); // navigator.clipboard ka use kar rhe hai to hame ye do line likhne ki jarurat hi nhi hai
        navigator.clipboard.writeText(text);
        props.showAlert("copied to Clipboard", "success");
    }
    const extraSpaces = () => {
        let newText = text.split(/[  ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces removed", "success");
    }
    const handleOnChange = (event) => {
        // console.log("on change");
        setText(event.target.value);
    }
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="mybox" rows="8" placeholder={props.placeholder}></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-1" onClick={upperCase}>convert to UpperCase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={lowerCase}>convert to LowerCase</button>
                <button className="btn btn-primary mx-2 my-1" onClick={clearText}>clear text</button>
                <button className="btn btn-primary mx-2 my-1" onClick={copyText}>copy text</button>
                <button className="btn btn-primary mx-2 my-1" onClick={extraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2> Your Text Summary </h2>
                <p> {text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters </p> {/*agar element ki length zero hai tab vo element is array me nhi rhega varna vo rhega mtlb jis bhi element ke liye true return karega vo rhega else vo nhi rhega */}
                <p> {0.008 * text.split(" ").length} Minutes to read </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here..."}</p>
            </div>
        </>
    )
}

// in 1min = 125 words can read
// so 1 word ke liye 1/125(0.008minute) time lagega  

// state ek component ko belong karti hai
// hooks - hooks are a new addition in react. they let you use state and other react features without writtting a class 
// hooks bina class banaye class ke feature use karne me help karta hai 