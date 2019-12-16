import React, { useState } from 'react';
import {Typography, TextField, Radio, RadioGroup, FormControl, FormControlLabel} from '@material-ui/core';

import ToolBase from "./tool_base";
import Tools from '../values/tools';

export default function AlphabeticOrder(props) {
    const tool = Tools.text_tools.text_alphabeticorder;

    const [text, setText] = useState("");
    const [type, setType] = useState("AZ");

    function processText(new_text){
        reorderText(new_text, type);
    }

    function handleOnChangeRadio(new_type){
        setType(new_type);
        reorderText(text, new_type);
    }

    function reorderText(new_text, order_type){
        if(order_type === "AZ") new_text = new_text.split("\n").sort().join("\n");
        if(order_type === "ZA") new_text = new_text.split("\n").reverse().join("\n");        
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
                            onInput={(event) => {processText(event.target.value);}}
                    ></TextField>

                    <FormControl component="fieldset">
                            <RadioGroup row value={type} onChange={(event) => handleOnChangeRadio(event.target.value)} >
                                <FormControlLabel value="AZ" control={<Radio color="primary"/>} label="A/Z" />
                                <FormControlLabel value="ZA" control={<Radio color="primary" />} label="Z/A" />
                            </RadioGroup>
                        </FormControl>

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