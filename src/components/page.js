import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Title from './title'
import ToolItem from './tool_item'

function Page() {
    return (
        <div>
            <Grid container spacing={1}>
                
                  <Grid item xs={12} md={2}></Grid>     
                  <Grid item xs={12} md={8}>
                    <Title></Title>
                  </Grid>  
                  <Grid item xs={12} md={2}></Grid>     

                  <Grid item xs={12} md>
                  </Grid>     
                  <Grid item xs={12} md={8}>
                    
                        <ToolItem></ToolItem>
                        
                  </Grid>  
                  <Grid item xs={12} md>
                    
                  </Grid>           
            </Grid>
        </div>
    );
}

export default Page;