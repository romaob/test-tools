import React, { useState } from 'react';

export default function AlphabeticOrder(props) {

    const [text, setText] = useState("");

    return (
        <div>
            <h1>Alphabetic Order</h1>
            <h2>Place the list bellow</h2>
            <textarea onInput={(event) => setText(event.target.value)}></textarea>
            <h2>Reordered list</h2>
            <textarea readOnly value={text.split("\n").sort().join("\n")}></textarea>
        </div>
    );
}