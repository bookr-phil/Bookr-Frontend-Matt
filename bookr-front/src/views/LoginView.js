import React from 'react'
import { connect } from 'react-redux'
import {  withRouter } from 'react-router-dom'
import { userLogin } from '../store/actions/loginAction'
import Login from '../components/Login'

class LoginView extends React.Component {
    state ={
        inputLogin: {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        e.persist()
        this.setState(prevState => ({
            inputLogin: {
                ...prevState.inputLogin,
                [e.target.name]: e.target.value
            }
        }))
    }

    handleLogin = e => {
        e.preventDefault()
        this.props.userLogin(this.state.inputLogin)
        this.props.history.push('/home')
    }

    render() {
        return(
            <div>
                <Login
                inputLogin = {this.state.inputLogin}
                handleChange = {this.handleChange}
                handleLogin = {this.handleLogin}
                />
            </div>
        )
    }

}

const mapStateToProps = state => ({
    loggingIn: state.loginReducer.loggingIn,
    isLoggedIn: state.loginReducer.isLoggedIn
})

export default withRouter(connect(
    mapStateToProps,
    { userLogin }
)(LoginView))