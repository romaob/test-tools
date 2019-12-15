import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

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
    let history = useHistory();
    return (
        <div>
            <Card className={classes.card}>
                <CardActionArea style={{height: '100%'}} onClick={() => history.push(props.item.href)}>
                    <CardContent>
                        <Icon color="primary" style={{ fontSize: 42 }}>{props.item.icon ? props.item.icon : "apps"}</Icon>
                        <Typography color="primary" gutterBottom variant="h5" component="h3">
                           {props.item.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {props.item.desc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default ToolItem