import React, { useState, useEffect } from "react";
import Grid from '@material-ui/core/Grid';

import Tool from './tool_item';

function ToolsList(props) {

    const [tools, setTools] = useState([]);

    useEffect(() => {
        setTools([
            {   title: 'Character Counter', 
                desc: 'Conts the characters of a text, and much more...', 
                icon: 'filter_3',
                href: '/textcounter' },
            {   title: 'Reverse Text', 
                desc: 'Shows the a reverse version of a text', 
                icon: 'compare_arrows',
                href: '/textreverse' },
            {   title: 'Text Case Changer', 
                desc: 'Change the case of a text, UPPER, lower, First Letter...', 
                icon: 'text_fields',
                href: '/textcase' },
            {   title: 'Alphabetic Order', 
                desc: 'Re-Order a list in alphabetic order', 
                icon: 'sort_by_alpha',
                href: '/textalphaorder' },
        ]);
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
                {tools.map(tool => (
                    <Grid item xs={6} sm={4} key={tool.title}>
                        <Tool title={tool.title} desc={tool.desc} icon={tool.icon} href={tool.href}></Tool>
                    </Grid>        
                ))}
            </Grid>

        </div>
    );
}

export default ToolsList;