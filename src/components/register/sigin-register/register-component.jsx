
import React, { Component } from 'react';

class Register extends Component{

    state={
        name:'',
        email:'',
        password:''
    }

    getValue = (event) =>{
        const nombre = event.target.value;
        console.log(nombre)
        this.setState({name: nombre})
    }

    submitHandle = event =>{
        event.preventDefault();
        this.setState({email:'edson@icloud.com',password:123})
    }

    render(){
        console.log('state', this.state)
        return(
            <div>

            <h1>Sing up with us!</h1>
            <form onSubmit={this.submitHandle}>
                <label name='name'>name</label>
                <input type='text' value={this.state.name} onChange={this.getValue}/><br/>
                <label name='email'>Email</label>
                <input type='email' value={this.state.email}/><br/>
                <label name='password'>Password</label>
                <input type='password'/><br/>
                <input type='submit' value='Submit Form'/>
            </form>
        </div>
        )
    }
}

export default Register