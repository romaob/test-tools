import React, { useState } from "react";

export default function TextCounter(){    
    const [nextid, setNextid] = useState(1);
    const [filter, setFilter] = useState('');
    const [filters, setFilters] = useState([]);
    const [text, setText] = useState("");
    const [chars, setChars] = useState(0);
    const [words, setWords] = useState(0);
    const [lines, setLines] = useState(0);
    
    function updateValues(text = ""){
        setText(text);
        setChars(text.length);
        setWords(text.split(" ").length);
        setLines(text.split("\n").length);
        let updatedFilters = filters;
        updatedFilters.map((item) => {
            item.qtd = (checkExpression(text, item.text) - 1);
            return item;
        });
        setFilters([...updatedFilters]);
    }

    function addFilter(expression){
        const newfilter = {
            id: nextid,
            text: expression,
            qtd: 0,
        }
        newfilter.qtd = checkExpression(text, newfilter.text) - 1;
        setFilters([...filters, newfilter]);        
        setNextid(nextid+1);
        setFilter('')
    }

    function remFilter(id){
        let newfilterslist = filters;
        newfilterslist.splice(newfilterslist.findIndex((value,index,array) => { return value.id === id}),1);        
        setFilters([...newfilterslist]);
    }

    function checkExpression(texttocheck, expression){      
        return texttocheck.split(expression).length;
    }

    
    return (
        <div>
            <h1>Characters Counter</h1>
            <h2>Place the text bellow</h2>
            <textarea onInput={(event) => updateValues(event.target.value)}></textarea>
            <p>Number of characters: {chars}</p>
            <p>Number of Words: {words}</p>
            <p>Number of Lines: {lines}</p>
            
            <h2>Add filters</h2>
            <input type="text" value={filter} onChange={(event) => setFilter(event.target.value)}></input>
            <button onClick={() => addFilter(filter)}>Add</button>
            
            <ul>
                Filters: 
                {filters.map(fil => (
                    <li key={fil.id}>
                        {fil.qtd} - 
                        {fil.text}
                        -
                        <button onClick={() => remFilter(fil.id)}>rem</button>
                    </li>
                ))}
            </ul>
                {/**/}
        </div>
    );

}
