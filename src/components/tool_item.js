import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

function ToolItem() {
    return (
        <div>
            <Card>
                <CardActionArea>
                    <CardContent>
                        <Icon style={{ fontSize: 42 }}>build</Icon>
                        <Typography gutterBottom variant="h5" component="h3">
                            Contador de Caracteres
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Description...
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default ToolItem