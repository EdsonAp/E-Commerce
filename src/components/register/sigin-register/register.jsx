import React from 'react';
import Signin from './signincomponent'
import Signup from './signup'
import './register-styles.scss'
import { ReactComponent as Logo } from '../../../Assets/register.svg'

const Registerlog = () =>(
    <>
    <div className='register-log-page'>
        <Signin/>
        <Signup/>
        <Logo/>
    </div>

    </>
)

export default Registerlog
