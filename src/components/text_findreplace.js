import React,  { useState, useEffect } from 'react';
import {Typography, TextField, Divider, Grid, Button} from '@material-ui/core';

import ToolBase from "./tool_base";
import Tools from '../values/tools';

function TextFindReplace(props) {
    const tool = Tools.text_tools.text_findreplace;

    const [text, setText] = useState("");
    const [textToFind, setTextToFind] = useState("");
    const [textToRepalce, setTextToReplace] = useState("");
    const [resultInfo, setResultInfo] = useState("");
    const [textPos, setTextPos] = useState("");
    const [qtdReplaced, setQtdReplaced] = useState(0);

    useEffect(() => {

    });
    
    function find(something, next = false){

    }

    function replace(All = false){

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
                        onInput={(event) => setText(event.target.value)}
                    ></TextField>

                    <Divider style={{margin: 5}}></Divider>
                    
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={6}>
                            <TextField label="Text to find" size="small" value={textToFind} onChange={(event) => {setTextToFind(event.target.value); find(event.target.value)}}/>                                                        
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Text to replace" size="small" value={textToFind} onChange={(event) => find(event.target.value)}/>
                        </Grid>            
                        <Grid item xs>
                            <Button variant="contained"  color="primary" onClick={() => find(textToFind, true)} >Find next</Button>                        
                        </Grid>
                        <Grid item xs>
                            <Button variant="contained"  color="primary" onClick={() => replace()} >Replace</Button>                        
                        </Grid>
                        <Grid item xs>
                            <Button variant="contained" color="primary" onClick={() => replace(true)} >All</Button>                        
                        </Grid>
                    </Grid>
                
                    <Divider style={{margin: 5}}></Divider>

                    <Typography color="primary" component="p">
                            Result:
                    </Typography>

                    <TextField multiline variant="outlined" rowsMax="10" rows="10"
                        style={{width: '100%'}}
                        value={text}
                    ></TextField>

                    <Typography color="textSecondary" component="p" style={{textAlign: "center"}}>
                           {resultInfo}
                    </Typography>
                </div>
            }
        >
        </ToolBase>

    );
}

export default TextFindReplace;