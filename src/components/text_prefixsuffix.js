import React, { useState } from 'react';
import {Typography, TextField, Divider, Grid, Button} from '@material-ui/core';

import ToolBase from "./tool_base";

import Tools from '../values/tools'

function TextPrefixSuffix(props) {
    const tool = Tools.text_tools.text_prefixsuffix;

    const [text, setText] = useState("");
    const [prefixAdd, setPrefixAdd] = useState("");
    const [suffixAdd, setSuffixAdd] = useState("");

    function addPrefix(){
        let new_text = text;
        new_text = new_text.split("\n").map((item) => {
            item = prefixAdd + item;
        }).join("\n");
        setText(new_text);
    }

    function addSuffix(){
        
    }

    function addNumber(){
        
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
                        onInput={(event) => setText(event.target.value)}
                    ></TextField>

                    <Divider style={{margin: 5}}></Divider>

                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                            <TextField label="Prefix" size="small" value={prefixAdd} onChange={(event) => setPrefixAdd(event.target.value)}/>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Suffix" size="small" value={prefixAdd} onChange={(event) => setSuffixAdd(event.target.value)}/>
                        </Grid>
                        <Grid item xs>
                            <Button variant="contained"  color="primary"  onClick={() => addPrefix()} >Add prefix</Button>                        
                        </Grid>
                        <Grid item xs>
                            <Button variant="contained"  color="primary"  onClick={() => addSuffix()} >Add suffix</Button>                        
                        </Grid>
                        <Grid item xs>
                            <Button variant="contained"  color="primary"  onClick={() => addNumber()} >Add number</Button>                        
                        </Grid>
                    </Grid>

                    <Divider style={{margin: 5}}></Divider>
                </div>
            }
        >
        </ToolBase>
    );
}

export default TextPrefixSuffix;