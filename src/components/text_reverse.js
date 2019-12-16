import React,  { useState } from 'react';
import {Typography, TextField} from '@material-ui/core';

import ToolBase from "./tool_base";
import Tools from '../values/tools';

export default function TextReverse(props) {
    const tool = Tools.text_tools.text_reverse;

    const [text, setText] = useState("");

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