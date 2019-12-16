import React from "react";
import {Grid, Typography} from '@material-ui/core';

import Tool from './tool_item';

function ToolsList(props) {

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography color="secondary" variant="h5" style={{textAlign: 'left'}}>
                        {props.title}
                    </Typography>
                </Grid>
                {props.tools.map(tool => (
                    <Grid item xs={6} sm={4} key={tool.title}>
                        <Tool item={tool}></Tool>
                    </Grid>        
                ))}
            </Grid>

        </div>
    );
}

export default ToolsList;