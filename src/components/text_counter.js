import React, { useState } from "react";
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';

import ToolBase from "./tool_base";

import Tools from '../values/tools';

export default function TextCounter(){ 
    const tool = Tools.text_tools.text_counter;
    console.log(Tools);
    console.log(tool);
    const theme = useTheme();
    const useStyles = makeStyles({
    
        filterpaper: {
            display: "inline-block", 
            paddingLeft: 10,
            margin: 5,
            backgroundColor: theme.palette.secondary[200],
            "& *": {
                display: "inline-block",
                marginRight: 5
            }
        },
      });   
    const classes = useStyles();

    const [nextid, setNextid] = useState(1);
    const [filter, setFilter] = useState('');
    const [filters, setFilters] = useState([]);
    const [text, setText] = useState("");
    const [chars, setChars] = useState(0);
    const [words, setWords] = useState(0);
    const [lines, setLines] = useState(0);
    
    function updateValues(text = ""){
        setText(text);
        setChars(text.length);
       
        let words_counter = 0;
        let lines_counter = 0;
        text.split("\n").map((item) => {
            lines_counter++;
            item.split(" ").map((subitem) => {
                if(subitem !== ""){
                    words_counter++;
                }
                return item;
            });
            return item;
        });
        setWords(words_counter);        
        setLines(lines_counter);

        let updatedFilters = filters;
        updatedFilters.map((item) => {
            item.qtd = (checkExpression(text, item.text) - 1);
            return item;
        });
        setFilters([...updatedFilters]);
    }

    function addFilter(expression){
        if(expression !== ""){
            const newfilter = {
                id: nextid,
                text: expression,
                qtd: 0,
            }
            newfilter.qtd = checkExpression(text, newfilter.text) - 1;
            setFilters([...filters, newfilter]);        
            setNextid(nextid+1);
            setFilter('')
        }
    }

    function remFilter(id){
        let newfilterslist = filters;
        newfilterslist.splice(newfilterslist.findIndex((value,index,array) => { return value.id === id}),1);        
        setFilters([...newfilterslist]);
    }

    function checkExpression(texttocheck, expression){      
        return texttocheck.split(expression).length;
    }
    
    return (
        <div>
            <ToolBase             
                item={tool}      
                body={
                    <div>
                                                
                        <Typography color="primary" component="p">
                            Place the text bellow:
                        </Typography>
                        <TextField multiline variant="outlined" rowsMax="10" rows="10"
                            style={{width: '100%'}}
                            onInput={(event) => updateValues(event.target.value)}
                        ></TextField>       
                        
                        <Grid container spacing={3} style={{textAlign: "center", marginTop: 5}}>
                            <Grid item xs>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {chars} {chars === 1 ? " character" : " characters"}
                            </Typography>      
                            </Grid>
                            <Grid item xs>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {words} {words === 1 ? " word" : " words"}
                                </Typography>       
                            </Grid>
                            <Grid item xs>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {lines} {lines === 1 ? " line" : " lines"}
                                </Typography>       
                            </Grid>
                        </Grid>
                        
                        <Divider style={{margin: 5}}/>
                        
                        <Grid container style={{textAlign: "left"}}>                            
                            <Grid item xs={12}>
                                <Typography color="primary" component="p">
                                    Add some filters
                                </Typography>
                            </Grid>
                            
                            <Grid item xs>
                                <TextField size="small" value={filter} onChange={(event) => setFilter(event.target.value)}/>
                                <Button variant="contained"  color="primary" style={{marginLeft: 15}} onClick={() => addFilter(filter)} >Add</Button>                        
                            </Grid>
                        </Grid>
                        
                        
                        <Typography variant="body2" color="textSecondary" component="p">
                                    Filters:
                        </Typography>  
                        {filters.map(fil => (
                            <Paper key={fil.id} className={classes.filterpaper}>
                                <Typography variant="h6" component="p" color="secondary">
                                    {fil.qtd}
                                </Typography>
                                <Typography component="p" color="secondary">
                                    "{fil.text.length > 13 ? fil.text.substring(0,10) + "..." : fil.text}"
                                </Typography>
                                <IconButton aria-label="delete" size="small" style={{margin: 5}}
                                     onClick={() => remFilter(fil.id)}>
                                    <Icon color="secondary">delete</Icon>
                                </IconButton>
                            </Paper>
                        ))}   
                        {/*

                            
                                <Fab><Icon>cancel</Icon></Fab>
                              <Button
                                    variant="contained"
                                    color="default"
                                    endIcon={<Icon>cancel</Icon>}
                                >
                                </Button>
                                    

                        <ul>
                            Filters: 
                            {filters.map(fil => (
                                <li key={fil.id}>
                                    {fil.qtd} - 
                                    {fil.text}
                                    -
                                    <button onClick={() => remFilter(fil.id)}>rem</button>
                                </li>
                            ))}
                            </ul>]
                            */}

                    </div>
                }
            ></ToolBase>
            
            
                {/**/}
        </div>
    );

}
