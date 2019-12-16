import React, { useState } from 'react';
import {Typography, TextField, Radio, RadioGroup, FormControl, FormControlLabel} from '@material-ui/core';
import ToolBase from "./tool_base";

import Tools from '../values/tools';

export default function TextUpperLower(props) {
    const tool = Tools.text_tools.text_upperlower;
    
    const [text, setText] = useState("");
    const [type, setType] = useState("upper");

    function processText(newtext){        
        handleCase(newtext, type);
    }

    async function handleOnChangeRadio(new_type){
        setType(new_type);
        handleCase(text, new_type);
    }

    function handleCase(new_text, case_type){
        if(case_type === "upper") new_text = new_text.toUpperCase();
        if(case_type === "lower") new_text = new_text.toLowerCase();
        if(case_type === "first"){ new_text = new_text.split(" ").map((item) => {return (item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())}).join(" ");}
        setText(new_text);
    }

    return (
        <ToolBase
                item={tool} 
                body={
                    <div>
                        <Typography color="primary" component="p">
                            Place the text bellow:
                        </Typography>
                        <TextField multiline variant="outlined" rowsMax="10" rows="10"
                            style={{width: '100%'}}
                            onInput={(event) => processText(event.target.value)}
                        ></TextField>

                        <FormControl component="fieldset">
                            <RadioGroup row value={type} onChange={(event) => handleOnChangeRadio(event.target.value)} >
                                <FormControlLabel value="upper" control={<Radio color="primary"/>} label="UPPER CASE" />
                                <FormControlLabel value="lower" control={<Radio color="primary" />} label="lower case" />
                                <FormControlLabel value="first" control={<Radio color="primary" />} label="First Letter" />                                
                            </RadioGroup>
                        </FormControl>

                        {/*
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
                        */}

                        <Typography color="primary" component="p">
                            Result:
                        </Typography>                        
                        <TextField readOnly multiline variant="outlined" rowsMax="10" rows="10"
                            style={{width: '100%'}}
                            value={text}
                        ></TextField>
                    </div>
                }>                
        </ToolBase>
    );
}
