import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import {amber, grey, red} from '@material-ui/core/colors';
import CssBaseline from "@material-ui/core/CssBaseline";

import './App.css';

import Tools from "./values/tools"

import Home from "./components/home";
import TextCounter from "./components/text_counter";
import TextReverse from "./components/text_reverse";
import TextCase from "./components/text_upperlower";
import TextAlphaOrder from "./components/text_alphabeticorder";
import TextFindReplace from "./components/text_findreplace";
import TextPrefixSuffix from "./components/text_prefixsuffix";

const theme = createMuiTheme({
  palette:{
    type: "dark",

    //primary: amber,
    
    primary: {
      contrastText: "#000",
      dark: amber[600],
      light: amber[100],
      main: amber[200],
    },

    secondary: grey,

    text: {
      accent: amber[200],
      primary: "rgba(255,255,255,0.8)",
      //secondary: grey[400]
    },

    text_title: amber[200],

    backdark: grey[800],    
    
    background: {
      default: amber[200]
    }
    
  },
  padding: 15,
});

//console.log(theme);

function App() {

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path={Tools.text_tools.text_counter.href} exact component={TextCounter} />
              <Route path={Tools.text_tools.text_reverse.href} exact component={TextReverse} />
              <Route path={Tools.text_tools.text_upperlower.href} exact component={TextCase} />
              <Route path={Tools.text_tools.text_alphabeticorder.href} exact component={TextAlphaOrder} />
              <Route path={Tools.text_tools.text_findreplace.href} exact component={TextFindReplace} />
              <Route path={Tools.text_tools.text_prefixsuffix.href} exact component={TextPrefixSuffix} />              
            </Switch>
          </div>
      </Router>
      
    </MuiThemeProvider>
  );
}

export default App;


/*
    Features
    * Aleatory
      - Choose an item in a list
      - Randomize a list
      - Trow dices
      - generate sorted numbers 
    
    * Dates
      - Day counter between dates
      - Calculate date with an increase or decrease of days
      - Hours calculator
      - Age calculator
      - Stopwatch
      - Timer
      - Day of the year and progress

    * Charts
      - Easy chart  
*/