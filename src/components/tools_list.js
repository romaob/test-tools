import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import Tool from './tool_item';

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
    },
    gridList: {
    },
  }));

function ToolsList(props) {
    const classes = useStyles();

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
                href: '/textcounter' },
            {   title: 'Text Case Changer', 
                desc: 'Change the case of a text, UPPER, lower, First Letter...', 
                icon: 'text_fields',
                href: '/text_counter' },
            {   title: 'Alphabetic Order', 
                desc: 'Re-Order a list in alphabetic order', 
                icon: 'sort_by_alpha',
                href: '/textcounter' },
        ]);
    },[]);

    return (
        <div>
            <GridList cellHeight={'auto'} spacing={8} className={classes.gridList} cols={2}>
                {tools.map(tool => (
                    <GridListTile key={tool.title} >
                        <Tool title={tool.title} desc={tool.desc} icon={tool.icon} href={tool.href}></Tool>
                    </GridListTile>
                ))}
            </GridList>
        </div>
    );
}

export default ToolsList;