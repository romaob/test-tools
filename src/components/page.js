import React from 'react';

import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import Title from './title'

function Page(props) {
    const theme = useTheme();
      
    const useStyles = makeStyles({      
        page: {
            padding: theme.padding,
        },
    });

    const classes = useStyles();

    return (
        <div className={classes.page}>
            <Grid container spacing={1}>
                
                  <Grid item xs={12} md={2}></Grid>     
                  <Grid item xs={12} md={8}>
                    <Title></Title>
                  </Grid>  
                  <Grid item xs={12} md={2}>                     
                  </Grid>     

                  <Grid item xs={12} md>
                  {/*<div style={{backgroundColor: "#F00"}}>Prop1</div>*/}
                  </Grid>     
                  <Grid item xs={12} md={8}>                    
                        {props.body}
                  </Grid>  
                  <Grid item xs={12} md>
                    {/*<div style={{backgroundColor: "#F00"}}>Prop2</div>*/}
                  </Grid>           
            </Grid>
        </div>
    );
}

export default Page;