import React from 'react';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import BuildIcon from '@material-ui/icons/Build';


function Title() {
    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <h1 class="color-accent title">
                        <BuildIcon style={{ fontSize: 38 }}></BuildIcon>
                        Test Tools
                    </h1>
                </Grid>
            </Grid>
        </div>
    );
}

export default Title;