import React, { useState } from 'react';

export default function TextUpperLower(props) {
    
    const [text, setText] = useState("");
    const [upper, setUpper] = useState(true);
    const [lower, setLower] = useState(false);
    const [first, setFirst] = useState(false);

    function processText(newtext){
        newtext = upper ? newtext.toUpperCase() : newtext.toLowerCase();
        setText(newtext);
    }

    function handleCase(upper, lower, first){
        setUpper(upper);
        setLower(lower);
        setFirst(first);
        if(upper) setText(text.toUpperCase());
        if(lower) setText(text.toLowerCase());
        if(first){ setText(text.split(" ").map((item) => {return (item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())}).join(" "));}
    }

    return (
        <div>
            <h1>Text Case</h1>
            <h2>Place the text bellow</h2>
            <textarea onInput={(event) => processText(event.target.value)}></textarea>
            <br/>
            <label>
                <input type="radio" checked={upper} onChange={() => handleCase(!upper, false, false)} />
                UPPERCASE
            </label>
            <label>
                <input type="radio" checked={lower} onChange={() => handleCase(false, !lower, false)} />
                lowecase
            </label>            
            <label>
                <input type="radio" checked={first} onChange={() => handleCase(false, false, !first)} />
                First Letter
            </label>
            <h2>Result</h2>
            <textarea readOnly value={text}></textarea>
        </div>
    );
}
