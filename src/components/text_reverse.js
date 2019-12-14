import React,  { useState } from 'react';
import {Typography, TextField} from '@material-ui/core';

import ToolBase from "./tool_base";

export default function TextReverse(props) {

    const [text, setText] = useState("");

    return (
        <ToolBase
                title={"Text Reverse"}             
                desc={"Reverse the order of each character in a text"}
                body={                    
                    <div>
                        <Typography color="primary" component="p">
                            Place the text bellow:
                        </Typography>

                        <TextField multiline variant="outlined" rowsMax="10" rows="10"
                            style={{width: '100%'}}
                            onInput={(event) => setText(event.target.value)}
                        ></TextField>

                        <Typography color="primary" component="p">
                            Result:
                        </Typography>                        
                        <TextField readOnly multiline variant="outlined" rowsMax="10" rows="10"
                            style={{width: '100%'}}
                            value={text.split("").reverse().join("")}
                        ></TextField>
                    </div>
                }
        >
        </ToolBase>             
    );
}