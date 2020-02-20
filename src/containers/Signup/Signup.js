import React, {Component} from 'react';
import {Typography} from '@material-ui/core';
import SignupForm from '../../components/SignupForm/SignupForm';
import './Signup.css';
class Signup extends Component {
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
            signup
            </Typography>
            <SignupForm/>
        </div>
    );
}
}

export default Signup;