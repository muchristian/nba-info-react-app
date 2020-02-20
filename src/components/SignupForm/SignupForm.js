import React, {Fragment} from 'react';
import {TextField, Button} from '@material-ui/core';
import './SignupForm.css';

const SignupForm  = () => {
    return(
    <Fragment>
<form noValidate autoComplete="off">
<TextField id="filled-basic" label="Full Name" variant="filled" />
<TextField id="filled-basic" label="Email" variant="filled" />
<TextField id="filled-basic" label="Password" variant="filled" />
<TextField id="filled-basic" label="Confirm Password" variant="filled" />
<Button variant="contained" size="large" color="primary">
          signup
        </Button>
    </form>
    </Fragment>
    );
}

export default SignupForm;