import React, {Component} from 'react';
import {Typography} from '@material-ui/core';
import SigninForm from '../../components/SigninForm/SigninForm';
import './Signin.css';
class Signin extends Component {
render(){
    const style = {
        hd4:{
            textTransform: 'capitalize',
    fontWeight: 'bold',
    color:'#f1f1f1',
    textAlign: 'center',
    margin: '35px 0 30px'
    }
    }
    return(
        <div className="signup">
            <Typography variant="h4" style={style.hd4}>
            signin
            </Typography>
            <SigninForm/>
        </div>
    );
}
}

export default Signin;