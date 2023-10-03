import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {
  
  const handleUpClick =()=>{
    console.log("clicked");
    let newText=text.toUpperCase();
    setText(newText)
    props.showAlert(" Converted to upper case!","Success")
  }

  const handleLoClick =()=>{
    console.log("clicked");
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert(" Converted to lower case!","Success")
  }

  const handleTrimClick =()=>{
    console.log("clicked");
    let newText=text.trimEnd();
    setText(newText)
  }

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert(" Speaking ...!","Success")
  }

  const handleclClick =()=>{
    console.log("clicked");
    let newText='';
    setText(newText)
    props.showAlert(" Text Cleared !","Success")
  }

  const handelOnChange =(event)=>{
    console.log("Onchange");
    setText(event.target.value);
  }
  const[text,setText]=useState('');
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="MyBox" className="form-label"></label>
        <textarea className="form-control" id="myBox" onChange={handelOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',color:props.mode==='dark'?'white':'black'}} value ={text} rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className='btn btn-primary' onClick={handleUpClick}>Convert To Upper</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert To Lower</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleTrimClick}>Trim Text</button>
      <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={speak}>Speak Text</button>
      <button className='btn btn-primary mx-1 my-1' onClick={handleclClick}>Clear Text</button>
    </div>
    <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Text Summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} alphabets</p>
      <p><b>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</b> Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Some Text To Preview"}</p>
    </div>
    </>
  );
}
