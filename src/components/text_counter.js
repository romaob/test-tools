import React, { useState } from "react";

export default function TextCounter(){

    const [chars, setChars] = useState(0);
    const [words, setWords] = useState(0);
    const [lines, setLines] = useState(0);
    
    function updateValues(text = ""){
        setChars(text.length);
        setWords(text.split(" ").length)
        setLines(text.split("\n").length)
    }

    return (
        <div>
            <h1>Characters Counter</h1>
            <h2>Place the text bellow</h2>
            <textarea onChange={(event) => updateValues(event.target.value)}></textarea>
            <p>Number of characters: {chars}</p>
            <p>Number of Words: {words}</p>
            <p>Number of Lines: {lines}</p>
        </div>
    );

}
