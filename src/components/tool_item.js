import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
    card: {
      height: '150px',
      margin: 2,
    },
  });

function ToolItem(props) {
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.card}>
                <CardActionArea style={{height: '100%'}} onClick={() => console.log("works")}>
                    <CardContent>
                        <Icon style={{ fontSize: 42 }}>{props.icon ? props.icon : "apps"}</Icon>
                        <Typography gutterBottom variant="h5" component="h3">
                           {props.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default ToolItem