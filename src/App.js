import React from 'react';
import backGround from './back.jpg';
import './App.css';
import { Fragment, Component } from 'react';
import { BrowserRouter, NavLink,Route,Redirect } from 'react-router-dom';
import AuthLayout from './containers/authLayout/AuthLayout';
import DashLayout from './containers/dashLayout/DashLayout'
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
  state={
    isLogged:localStorage.getItem('logged')
  }
  componentDidUpdate(){
    this.logOut()
  }
  logOut = ()=>{
    localStorage.setItem('logged', false);
    return <Redirect to='/' />
    //this.setState({isLogged:localStorage.getItem('logged')})
  }
  
  
  render(){
    let layout = null;
    let navigate = null;
    console.log(this.state.isLogged);
    if(this.state.isLogged){
      layout=<Route path="/dashboard" exact component={DashLayout} />
      navigate = (
        <Fragment>
              <li><NavLink to='/dashboard'>{JSON.parse(localStorage.getItem('newUser'))[0].email}</NavLink></li>
              <li><NavLink to='/' onClick={() => this.logOut()}>Logout</NavLink></li>
              </Fragment>
      )
    }else{
      layout=<AuthLayout backGround={backGround}/>
      navigate=(
        <Fragment>
              <li><NavLink to='/'>login</NavLink></li>
                <li><NavLink to='/signup'>signup</NavLink></li>
          </Fragment>
      )
    }
    
  return (
    <BrowserRouter>
    <Fragment>
      <AppBar position="sticky" className="navbar" bgColor="primary">
        <Toolbar variant="dense" className="toolBar">
          
          <img src={logo} alt="none"/>
          <ul className="menu">
            {navigate}
          </ul>
        </Toolbar>
      </AppBar>
      <main>
        {layout}
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
