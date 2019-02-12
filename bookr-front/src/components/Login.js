import React from 'react'

const Login = props => {
    return (
        <div>
            <form>
                <input 
                type="text"
                name="username"
                placeholder="username"
                onChange={props.handleChange}
                value={props.inputLogin.username}
                />
                <input 
                type="text"
                name="password"
                placeholder="password"
                onChange={props.handleChange}
                value={props.inputLogin.password}
                />
                <button onClick={props.handleLogin}>Login</button>
            </form>
        </div>
    )
}

export default Login