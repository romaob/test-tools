import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';

import Tool from './tool_item';

import Tools from '../values/tools'

function ToolsList(props) {

    const [tools, setTools] = useState([]);

    useEffect(() => {
        setTools(Tools.text_tools);
    },[]);

    return (
        <div>
            {/*
            <GridList cellHeight={'auto'} spacing={8} className={classes.gridList} cols={2}>
                {tools.map(tool => (
                    <GridListTile key={tool.title} >
                        <Tool title={tool.title} desc={tool.desc} icon={tool.icon} href={tool.href}></Tool>
                    </GridListTile>
                ))}
            </GridList>
                */}

            <Grid container spacing={1}>
                {Object.values(tools).map(tool => (
                    <Grid item xs={6} sm={4} key={tool.title}>
                        <Tool item={tool}></Tool>
                    </Grid>        
                ))}
            </Grid>

        </div>
    );
}

export default ToolsList;