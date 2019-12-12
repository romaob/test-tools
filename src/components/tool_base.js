import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Page from './page'

const useStyles = makeStyles({
    
    panel: {
        padding: 15,
        textAlign: 'left',
        color: 'primary',
    },
});


function ToolBase(props) {
    const classes = useStyles();
    return (
        <div>
            <Page body={
                <div>
                    <Paper>
                        <Typography gutterBottom variant="h5" component="h3">
                            {props.title}
                        </Typography>
                        <Typography component="p">
                            {props.desc}
                        </Typography>
                        {props.body}
                    </Paper>
                </div>
            }></Page>
        </div>
    );
}

export default ToolBase;
