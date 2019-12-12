import React from 'react';

import Grid from '@material-ui/core/Grid';

import Title from './title'
import ToolItem from './tool_item'

function Page(props) {
    return (
        <div>
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