import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';


import Page from './page'

function ToolBase(props) {        
    const theme = useTheme();
    let history = useHistory();

    const useStyles = makeStyles({      
        panel: {
            padding: theme.padding,
            textAlign: 'left',
            backgroundColor: theme.palette.backdark,            
        },
        title: {
            color: theme.palette.text_title,
            textAlign: 'left',
        },
        description: {
            //color: theme.palette.textcolor_description,
            textAlign: 'center',
        },
    });

    const classes = useStyles();
    return (
        <div>
            <Page body={
                <div>
                    <Paper className={classes.panel}>
                        <Grid container spacing={3}>
                            <Grid item>
                                <Fab size="small" onClick={() => history.push("/")}>
                                    <Icon>arrow_back</Icon>
                                 </Fab>
                            </Grid>
                            <Grid item>
                                
                        
                        <Typography className={classes.title} gutterBottom variant="h4">
                            {props.item.title}
                        </Typography>
                            </Grid>
                        </Grid>
                        <Typography className={classes.description} color="textSecondary" variant="body2" component="p">
                            {props.item.desc2}
                        </Typography>                        
                        <Divider style={{margin: 5}}/>
                        {props.body}
                    </Paper>
                </div>
            }></Page>
        </div>
    );
}

export default ToolBase;
