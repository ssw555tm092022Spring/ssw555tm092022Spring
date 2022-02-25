import React from 'react';
import ReactDOM from 'react-dom';
import '../Home/index.scss';
import NavBar from "../Home/NavBar";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            xLeft: '50px',
            yLeft: '450px',
            zLeft: '0px',
        }
    }

    login() {
        // login function
        this.setState({
            xLeft: '50px',
            yLeft: '450px',
            zLeft: '0px',
        })

    }

    register() {
        console.log('in')
        // register function
        this.setState({
            xLeft: '-400px',
            yLeft: '50px',
            zLeft: '110px',
        })
    }

    render() {
        return (
            <div className="full-page">
                <NavBar />

                <div id='login-form' className='login-page'>
                    <div className="form-box">
                        <div className='button-box'>
                            <div id='btn' style={{left: this.state.zLeft}}></div>
                            <button type='button' onClick={() => this.login()} className='toggle-btn'>Log In</button>
                            <button type='button' onClick={() => this.register()} className='toggle-btn'>Register</button>
                        </div>
                        <form style={{left: this.state.xLeft}} id='login' className='input-group-login'>
                            <input type='text' className='input-field' placeholder='Email Id' required />
                                <input type='password' className='input-field' placeholder='Enter Password' required />
                                    <input type='checkbox' className='check-box' /><span>Remember Password</span>
                                        <button type='submit' className='submit-btn'>Log in</button>
                        </form>
                        <form style={{left: this.state.yLeft}} id='register' className='input-group-register'>
                            <input type='text' className='input-field' placeholder='First Name' required />
                                <input type='text' className='input-field' placeholder='Last Name ' required />
                                    <input type='email' className='input-field' placeholder='Email Id' required />
                                        <input type='password' className='input-field' placeholder='Enter Password'
                                               required />
                                            <input type='password' className='input-field'
                                                   placeholder='Confirm Password' required />
                                                <input type='checkbox' className='check-box' /><span>I agree to the terms and conditions</span>
                                                    <button type='submit' className='submit-btn'>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login