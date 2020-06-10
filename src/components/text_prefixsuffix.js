import React, { useState } from 'react';
import {Typography, TextField, Divider, Grid, Button} from '@material-ui/core';

import ToolBase from "./tool_base";

import Tools from '../values/tools'

function TextPrefixSuffix(props) {
    const tool = Tools.text_tools.text_prefixsuffix;

    const [text, setText] = useState("");
    const [textFinal, setTextFinal] = useState("");
    const [textToAdd, setTextToAdd] = useState("");

    function addToText(prefix, suffix){
        if(textToAdd != ""){
            let new_text = textFinal;
            new_text = new_text.split("\n").map((item) => {
                if(prefix) item = `${textToAdd}${item}`;
                if(suffix) item = `${item}${textToAdd}`;
                return item;
            }).join("\n");
            setTextFinal(new_text);
        }
    }

    function addNumber(){
        let new_text = textFinal;
        new_text = new_text.split("\n").map((item, index) => {
            item = `${(index+1)} ${item}`;
            return item;
        }).join("\n");
        setTextFinal(new_text);
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
                        value={text}
                        onInput={(event) => {setText(event.target.value); setTextFinal(event.target.value)}}
                    ></TextField>

                    <Divider style={{margin: 5}}></Divider>

                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12}>
                            <TextField label="Text to add" size="small" value={textToAdd} onChange={(event) => setTextToAdd(event.target.value)}/>
                        </Grid>
                        <Grid item xs>
                            <Button variant="contained"  color="primary"  onClick={() => addToText(true)} >Add as prefix</Button>                        
                        </Grid>
                        <Grid item xs>
                            <Button variant="contained"  color="primary"  onClick={() => addToText(null,true)} >Add as suffix</Button>                        
                        </Grid>
                        <Grid item xs>
                            <Button variant="contained"  color="primary"  onClick={() => addNumber()} >Enumerate</Button>                        
                        </Grid>
                    </Grid>

                    <Divider style={{margin: 5}}></Divider>

                    <Typography color="primary" component="p">
                            Result:
                    </Typography>

                    <TextField readOnly multiline variant="outlined" rowsMax="10" rows="10"
                        style={{width: '100%'}}
                        value={textFinal}
                    ></TextField>

                </div>
            }
        >
        </ToolBase>
    );
}

export default TextPrefixSuffix;