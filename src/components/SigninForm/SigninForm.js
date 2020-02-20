import React, {Fragment} from 'react';
import {TextField, Button} from '@material-ui/core';
import './SigninForm.css';

const SigninForm  = () => {
    return(
    <Fragment>
<form noValidate autoComplete="off">
<TextField id="filled-basic" label="Email" variant="filled" />
<TextField id="filled-basic" label="Password" variant="filled" />
<Button variant="contained" size="large" color="primary">
          signin
        </Button>
    </form>
    </Fragment>
    );
}

export default SigninForm;