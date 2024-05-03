import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { push } from "connected-react-router";
// import * as actions from "../../store/actions";
import {Nav} from "react-bootstrap"
import './Login.css';
// import { Link } from 'react-router-dom/cjs/react-router-dom';
// import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
// import { FormattedMessage } from 'react-intl';


import { withRouter } from 'react-router-dom';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isShowPassword: false,
        }
    }

    

    handleOnChangeUsername = (event) => {
        this.setState({
            username: event.target.value
        })
        console.log(event.target.value)
    }

    handleOnChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
        console.log(event.target.value)
    }


    handleLogin = () => {
        console.log('username: ', this.state.username, 'password: ', this.state.password)
        console.log('all state ', this.state)
        this.props.history.push('/home');
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: !this.state.isShowPassword
        })
    }

    

    render() {

        return (
           <div className='Login_Background'>
                <div className='Login_Container'>
                    <div className='Login_content row'>
                        <div className='col-12 text-login'>
                            Login
                        </div>
                        <div className='col-12 form-group Login_input'>
                            <label>Username</label>
                            <input  type='text' 
                                    className='form-control' 
                                    placeholder='Enter your usename'
                                    // value={this.state.username}
                                    onChange={(event) => this.handleOnChangeUsername(event)}
                            >
                            </input>
                        </div>
                        <div className='col-12 form-group Login_input'>
                            <label>Password</label>
                            <div className='custom-input-password'>
                                <input  type= {this.state.isShowPassword ? 'text' : 'password'}  
                                        className='form-control'
                                        placeholder='Enter your password'
                                        // value={this.state.password}
                                        onChange={(event) => this.handleOnChangePassword(event)}
                                >
                                </input>
                                <span className='eye'
                                    onClick={() => {this.handleShowHidePassword()}}
                                >
                                    <span  className={this.state.isShowPassword ? "fa-solid fa-envelope" : 'fa-regular fa-eye-slash'}></span>

                                </span>
                            </div>
                        </div>
                        <div className='col-12 mg-0-center'> 
                            {/* <Link to="/home" className="your-button-class">Login</Link> */}
                            <Nav.Link 
                                    href="/home"
                            >
                                <button className='btn_login'
                                        onClick={() => {this.handleLogin()}}>
                                    Login
                                </button>
                            </Nav.Link> 
                        </div>
                        <div className='col-12 text-center'> <span className='sign_in'>Sign in</span> </div>
                        <div className='col-12 text-center'> <span className='forgot_password'>Forgot your password</span> </div>
                        <div className='col-12 text-center'>
                            <span>Orther login with:</span>
                        </div>
                        <div className='col-12 social_login'>
                            <i className="fa-brands fa-google google"></i>
                            <FaFacebook />
                        </div>
                    </div>
                </div>
           </div>

        )
    }
}

export default Login
