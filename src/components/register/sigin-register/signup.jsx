import React from 'react';
import '../../register/sigin-register/signupstyles.scss'

const Signup = () =>(
    < >
    <div className='signup'>
        <h1 className='register-title'>Register</h1>
        <span>Don't have and account with us?</span>
        <form>
            <label type='text' placeholder='Name'></label>
            <input name='name' type='name' placeholder='Name'/>
            <br/>
            <label type='text'></label>
            <input name='email' type='email' placeholder='Email'/>
            <br/>
            <label type='password'></label>
            <input name='password' type='password' placeholder='Password'/>
            <br/>
            <input type='submit' value='Submit Registration'/>
        </form>
    </div>
    </>
)


export default Signup