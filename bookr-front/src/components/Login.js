import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TopSpace = styled.div`
    background: #689775;
    width: 100%;
    display: block;
    color: #689775;
    padding-bottom: 5%;
`

const MainHeading = styled.h1`
    text-align: center;
    font-size: 75px;
    font-weight: bold;
    margin-top: 5%;
    margin-bottom: 3%;
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledInput = styled.input`
    width: 25%;
    padding: .5%;
    font-size: 24px;
    margin-bottom: 2%;
`

const StyledButton = styled.button`
    width: 200px;
    padding-top: .5%;
    padding-bottom: .5%;
    border-radius: 10px;
    background: #907163;
    color: white;
    font-weight: bold;
`

const Login = props => {
    return (
        <div>
            <TopSpace>.</TopSpace>
            <MainHeading>Bookr Login</MainHeading>
            <StyledForm>
                <StyledInput 
                type="text"
                name="username"
                placeholder="username"
                onChange={props.handleChange}
                value={props.inputLogin.username}
                />
                <StyledInput 
                type="text"
                name="password"
                placeholder="password"
                onChange={props.handleChange}
                value={props.inputLogin.password}
                />
                <StyledButton onClick={props.handleLogin}>Login</StyledButton>
                {/* <Link to="/home"><StyledButton>Login</StyledButton></Link> */}
            </StyledForm>
        </div>
    )
}

export default Login