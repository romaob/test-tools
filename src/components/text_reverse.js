import React,  { useState } from 'react';

export default function TextReverse(props) {

    const [text, setText] = useState("");

    return (
        <div>
            <h1>Text Reverse</h1>
            <h2>Place the text bellow</h2>
            <textarea onInput={(event) => setText(event.target.value)}></textarea>
            <h2>Reverse Text</h2>
            <textarea readOnly value={text.split("").reverse().join("")}></textarea>
        </div>
    );
}