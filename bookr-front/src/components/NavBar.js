import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'


const StyledNav = styled.nav`
    text-align: right;
    margin: 0 auto;
    background: #689775;
    padding-right: 10%;
    padding-top: 2%;
    padding-bottom: 2%;
    position: relative;
    width: 100%
    @media(max-width: 500px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-right: 0%;
    }

`

const StyledLink = styled.span`
    color: black;
    font-size: 30px;
    margin-left: 5%;
    color: white;
    font-weight: bold;
    @media(max-width: 500px) {
        // font-size: 24px;
        margin-left: 0%;
    }

`

const NavBar = (props) => {
    return(
        <div>
            <StyledNav>
                <NavLink to="/home"><StyledLink>Home</StyledLink></NavLink>
                <NavLink to="/home/addbook"><StyledLink>Add New Book</StyledLink></NavLink>
                <NavLink to="/"><StyledLink onClick={props.logout()}>Logout</StyledLink></NavLink>
            </StyledNav>
        </div>
    )
}

export default NavBar