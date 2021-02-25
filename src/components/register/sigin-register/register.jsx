import React from 'react';
import Signin from './signincomponent'
import Signup from './signup'
import './register-styles.scss'



const Registerlog = () =>(
    <>
    <div className='register-log-page'>
        <Signin/>
        <Signup/>
    </div>

    </>
)

export default Registerlog
