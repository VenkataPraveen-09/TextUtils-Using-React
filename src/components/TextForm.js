import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {

  const handleUpClick =()=>{
    console.log("clicked");
    let newText=text.toUpperCase();
    setText(newText)
  }

  const handleLoClick =()=>{
    console.log("clicked");
    let newText=text.toLowerCase();
    setText(newText)
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
  }

  const handleclClick =()=>{
    console.log("clicked");
    let newText='';
    setText(newText)
  }

  const handelOnChange =(event)=>{
    console.log("Onchange");
    setText(event.target.value);
  }
  const[text,setText]=useState('');
  return (
    <>
    <div className='container'>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label htmlFor="MyBox" className="form-label"></label>
        <textarea className="form-control" id="myBox" onChange={handelOnChange} value ={text} rows="8"></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleUpClick}>Convert To Upper</button>
      <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert To Lower</button>
      <button className='btn btn-primary mx-1' onClick={handleTrimClick}>Trim Text</button>
      <button className='btn btn-primary mx-1' onClick={speak}>Speak Text</button>
      <button className='btn btn-primary mx-1' onClick={handleclClick}>Clear Text</button>
    </div>
    <div className="container my-3">
      <h2>Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} alphabets</p>
      <p><b>{0.008*text.split(" ").length}</b> Minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}
