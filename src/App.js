import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import {amber, grey} from '@material-ui/core/colors';
import CssBaseline from "@material-ui/core/CssBaseline";

import './App.css';

import Home from "./components/home";
import TextCounter from "./components/text_counter";
import TextReverse from "./components/text_reverse";
import TextCase from "./components/text_upperlower";
import TextAlphaOrder from "./components/text_alphabeticorder";

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
              <Route path="/textcounter" exact component={TextCounter} />
              <Route path="/textreverse" exact component={TextReverse} />
              <Route path="/textcase" exact component={TextCase} />
              <Route path="/textalphaorder" exact component={TextAlphaOrder} />
            </Switch>
          </div>
      </Router>
      
    </MuiThemeProvider>
  );
}

export default App;
