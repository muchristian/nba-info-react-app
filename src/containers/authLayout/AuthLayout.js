import React, {Component, Fragment} from 'react';
import './authLayout.css';
import OverLay from '../../components/overLay/OverLay';
import { Route, Switch } from 'react-router-dom';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
class AuthLayout extends Component {
    
render() {
    /*
    const style = {
        background: {
            backgroundImage: `url(${this.props.backGround})`
        }
      }
      */
    return(
        <Fragment>
            <div className="content">
                <OverLay/>
                <Switch>
                <Route path="/" exact component={Signin} />
                <Route path="/signup" component={Signup} />
                </Switch>
                
            </div>
        </Fragment>
    );
}
}

export default AuthLayout;