import React from 'react';
import backGround from './back.jpg';
import './App.css';
import { Fragment, Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom';
import AuthLayout from './containers/authLayout/AuthLayout';
import {AppBar, Toolbar, Typography} from '@material-ui/core';
import logo from './309539.svg';
const style = {
  bold : {
    fontWeight:700
  },
  fSize : {
    fontSize: '16px'
  }
}

class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <Fragment>
      <AppBar position="sticky" className="navbar" bgColor="primary">
        <Toolbar variant="dense" className="toolBar">
          
          <img src={logo} alt="none"/>
          <ul className="menu">
            <li><NavLink to='/'>login</NavLink></li>
            <li><NavLink to='/signup'>signup</NavLink></li>
          </ul>
        </Toolbar>
      </AppBar>
      <main>
        <AuthLayout backGround={backGround}/>
      </main>
      <footer>
      <Typography variant="h6" color="primary.main" style={style.fSize}>
            nba info &copy; 2020
          </Typography>
      </footer>
    </Fragment>
    </BrowserRouter>
  );
  }
}

export default App;
