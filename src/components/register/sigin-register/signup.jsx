import React from 'react';
import '../../register/sigin-register/signupstyles.scss'

const Signup = () =>(
    < >
    <div className='signup'>
        <h1 className='register-title'>Register</h1>
        <span className='subtitle'>Don't have and account with us?</span>
        <form>
            <label type='text' placeholder='Name'></label>
            <input name='name' type='name' placeholder='Name' className='input'/>
            <br/>
            <label type='text'></label>
            <input name='email' type='email' placeholder='Email' className='input'/>
            <br/>
            <label type='password'></label>
            <input name='password' type='password' placeholder='Password' className='input'/>
            <br/>
            <input type='submit' value='Submit Registration' className='submit-btn'/>
        </form>
    </div>
    </>
)


export default Signup