import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const handleUpClick = () => {
        // console.log("Upper case clicked !!!");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Message has been successfully Converted to Upper Case...', 'success')
    }

    const handleLWClick = () => {
        // console.log("Upper case clicked !!!");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Message has been successfully Converted to Lower Case...', 'success')
    }

    const handleClearClick = () => {
        // console.log("Upper case clicked !!!");
        let newText = '';
        setText(newText);
        props.showAlert('Textbox has been successfully cleared...', 'success')
    }

    const handleCopyClick = () => {
        // console.log("Upper case clicked !!!");
        navigator.clipboard.writeText(text)
        props.showAlert('Message has been successfully Copied...', 'success')
    }

    const handleRemoveExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert('Extra spaces has been successfully removed from the Message...', 'success')
    }

    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h1 className='mb-4'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppar Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleLWClick}>Convert to Lower Case</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpace}>Remove Extra Spaces</button>
            </div>
            <div className="container my-2" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
                <h2>Your Text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words, {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text : 'Nothing to Preview!'}</p>
            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string
}