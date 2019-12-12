import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core';
import {amber, grey} from '@material-ui/core/colors';
import CssBaseline from "@material-ui/core/CssBaseline";

import './App.css';

import Home from "./components/home";
import TextCounter from "./components/text_counter";

const theme = createMuiTheme({
  palette:{
    primary: amber,    
    secondary: grey,
    background: {
      default: amber[200]
    }
  },
});

function App() {

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
        <Router>
          <div className="App">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/textcounter" exact component={TextCounter} />
            </Switch>
          </div>
      </Router>
      
    </MuiThemeProvider>
  );
}

export default App;
