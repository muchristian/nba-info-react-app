import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
//import { createMuiTheme, ThemeProvider } from '@material-ui/core/colors/';

const theme = createMuiTheme({
  palette: {
    primary: {
      main:'#ffffff',
      main1:'#0277bd',
     hover:'#3d5afe',
     active:'#00e676'
    },
    secondary: {
     main: '#212121',
     dark: '#757575'
    }
  },
  overrides: {
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "rgb(196, 196, 196)"
        }
      }, 
      
      focused: {}
    },
    
    MuiFormControl:{
      root:{
        margin:`5px 0 25px`
      }
    },
    MuiFilledInput:{
      root:{
        "&:hover": {
          backgroundColor: `white`
        },
        "&$focused": {
          backgroundColor: `white`
        },
        backgroundColor:`white`,
        lineHeight:`0.600em`
      },
      underline: {
        "&:after": {
            borderBottom: `2px solid #0277bd`
        }
      
    },
    focused: {}
    },
    MuiInputBase:{
      input:{
        height:`0.600em`,
        width:`400px`
      },
      focused: {}
    },
    MuiButton:{
      containedPrimary:{
        fontWeight:600,
        backgroundColor:`#0277bd`,
        color:`white`,
        "&:hover": {
          backgroundColor: `#3d5afe`
      }
      }
    }
  }
    
});


ReactDOM.render(
    <ThemeProvider theme={theme}>
<App />
</ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
