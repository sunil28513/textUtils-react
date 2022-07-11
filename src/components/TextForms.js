import React,{useState} from 'react'
 
export default function TextForms(props) {

    const [text, setText] = useState('')
    
    // upeercase
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase", "success")
    }

    //lowercase
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    //capitalize
    const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
   }

    // Clear Text
    const handleClearClick = () => {
        let newText = '';
        setText(newText)
    }

    // copy text
    const handleCopy = () =>{
        var text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value)
    }

    // Speak on click
   const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
  }

    //clear text
    const clearText = () =>{
        let newText = text.clearText();
        setText(newText)
    }

    // Remove punctuations
    const handleRemoveClick = () => {
        let puncs = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
        let result = text.replace(puncs, '');
        let newText = result;
        setText(newText)
    }

    // remove extra spaces
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    //first letter uppercase
    const capitalFirstLetter = () =>{
        let words = text.split(" ")
       let uppercaseword = ' '
        words.forEach(element => {
           uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
        });
        setText(uppercaseword)
    }
    // Remove New line
    const handleNewLineRmClick = () => {
        let someText = text.replace(/(\n|\r)/gm, "");
        let newText = someText;
        setText(newText)
    }
    // Remove Numbers
    const handleNumRmClick = () => {
        let num = text.replace(/[0-9]/g, "");
        let newText = num;
        setText(newText)
    }

    const handleOnChange = (event) =>{
        setText(event.target.value)
    }

  return (
    <>
        <h1 style={{color:props.mode === 'dark' ? 'white' : 'black'}}> {props.heading} </h1>

        {/* <textarea id='mybox' showAlert={showAlert} style={{backgroundColor:props.mode === 'dark' ? '#204660' : 'white', color:props.mode=== 'dark'?'white': 'black'}} className='form-control mb-3' rows="8" value={text} onChange={handleOnChange}></textarea> */}
        <textarea id='mybox' showAlert={props.showAlert} style={{backgroundColor:props.mode === 'dark' ? '#204660' : 'white', color:props.mode=== 'dark'?'white': 'black'}} className='form-control mb-3' rows="8" value={text} onChange={handleOnChange}></textarea>

        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleCapitalize}>Capitalize</button>
        <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>
        <button type="submit" onClick={handleClearClick} className="btn btn-primary mx-2 my-2">Clear</button>
        <button type="submit" onClick={handleRemoveClick } className="btn btn-primary mx-2 my-2">Remove Punctuations</button>
        <button type="submit" onClick={handleCopy } className="btn btn-primary mx-2 my-2">Copy text</button>
        <button type="submit" onClick={handleExtraSpaces } className="btn btn-primary mx-2 my-2">Remove Extra spaces</button>
        <button type="submit" onClick={capitalFirstLetter } className="btn btn-primary mx-2 my-2">first letter uppercase</button>
        <button type="submit" onClick={handleNewLineRmClick } className="btn btn-primary mx-2 my-2">Remove new line</button>
        <button type="submit" onClick={handleNumRmClick } className="btn btn-primary mx-2 my-2">Remove Numbers</button>


        {/* <h2 className={`mt-3 text-${props.mode === 'light' ? 'dark' :'light'}`}>Your text summery</h2> */}

        <h2 className={`mt-3 text-${props.mode ==='light' ? 'dark': 'white'}`}>Your text summery</h2>

        {/* <p>{text.split{" "}.length} words and    </p> */}

        <p style={{color:props.mode === 'dark' ? 'white' : 'black'}}>{text.split(" ").length} words and {text.length} characters </p>

        <p style={{color:props.mode === 'dark' ? 'white' : 'black'}}>{.008 * text.split(" ").length} Minuts read</p>
       
        <p style={{color:props.mode === 'dark' ? 'white' : 'black'}}><strong>Preview :</strong>  {text.length>0 ? text :"Enter Something in the TextField"}</p>
    </>
  )
}
