import React,  { useState, useEffect } from 'react';
import {Typography, TextField, Divider, Grid, Button} from '@material-ui/core';

import ToolBase from "./tool_base";
import Tools from '../values/tools';

function TextFindReplace(props) {
    const tool = Tools.text_tools.text_findreplace;

    const [text, setText] = useState("The Imperial Legion believes that as a province of the Empire, Skyrim must abide by its laws and customs.[1] Though most do not approve of the White-Gold Concordat, they nevertheless allow Thalmor Justiciars to enforce the ban in order to preserve the peace between the Empire and the Aldmeri Dominion.[2] If any legionaries are believers of Talos, such as Legate Rikke who is implied to be a believer, they keep their religion to themselves and pray to Talos discreetly and out of earshot. Though the Empire has appeased the Aldmeri Dominion's demands, the Imperial Legions in Skyrim claim that the Empire has little love for the Dominion. Most Imperial supporters believe that Skyrim and the Empire must remain united in order to fend off the Aldmeri Dominion if a second war with them erupts.[3] Some accuse Ulfric Stormcloak of orchestrating the Stormcloaks' rebellion as a selfish ploy to set himself up as Skyrim's next High King. The Imperial Legion believes that they can only restore peace to Skyrim and the Empire by killing Ulfric and quelling his rebellion.[4]");
    const [textFinal, setTextFinal] = useState("");
    const [textToFind, setTextToFind] = useState("");
    const [textToReplace, setTextToReplace] = useState("");
    const [resultInfo, setResultInfo] = useState("");
    const [textPos, setTextPos] = useState("");
    const [qtdFound, setQtdFound] = useState(0);
    const [qtdReplaced, setQtdReplaced] = useState(0);

    useEffect(() => {
        
    });
    
    function find(something, where){
        if(something !== ""){ setQtdFound(where.split(something).length-1); }
        else{ setQtdFound(0); }
    }

    function replace(All = false){
        let completeText = textFinal;
        if(All){
            completeText = textFinal.split(textToFind).join(textToReplace);
        }else{            
            completeText = textFinal.replace(textToFind, textToReplace);
        }
        setTextFinal(completeText)
        find(textToFind, completeText);
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
                        onInput={(event) => {setText(event.target.value); setTextFinal(event.target.value); find(textToFind, event.target.value)}}
                        value={text}
                    ></TextField>

                    <Divider style={{margin: 5}}></Divider>
                    
                    <Grid container spacing={3} alignItems="center">
                        <Grid item xs={6}>
                            <TextField label="Text to find" size="small" value={textToFind} onChange={(event) => {setTextToFind(event.target.value); find(event.target.value, textFinal)}}/>                                                        
                        </Grid>                        
                        <Grid item xs={6}>
                            <Typography color="primary" component="p">
                                    {qtdFound} found
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField label="Text to replace" size="small" value={textToReplace} onChange={(event) => {setTextToReplace(event.target.value, textFinal);}}/>                                                        
                        </Grid>        
                    </Grid>                            
                    <Divider style={{margin: 15}}></Divider>
                    <Grid container spacing={4} alignItems="center">                        
                        <Grid item xs>
                            <Button variant="contained"  color="primary" onClick={() => replace()} >Replace Next</Button>                        
                        </Grid>
                        <Grid item xs>
                            <Button variant="contained" color="primary" onClick={() => replace(true)} >Replace All</Button>                        
                        </Grid>
                        <Grid item xs></Grid>
                        <Grid item xs></Grid>
                    </Grid>
                
                    <Divider style={{margin: 5}}></Divider>

                    <Typography color="primary" component="p">
                            Result:
                    </Typography>

                    <TextField readOnly multiline variant="outlined" rowsMax="10" rows="10"
                        style={{width: '100%'}}
                        value={textFinal}
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