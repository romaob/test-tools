import React from 'react';

import {Grid, Typography} from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';

function Title() {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography color="secondary"  variant="h2">
                        <BuildIcon style={{ fontSize: 48 }}></BuildIcon>
                        Test Tools
                    </Typography>                    
                </Grid>                
            </Grid>
        </div>
    );
}

export default Title;