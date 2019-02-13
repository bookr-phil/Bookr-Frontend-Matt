import React from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"
import styled from 'styled-components'

const StyledNav = styled.nav`
    text-align: right;
    margin: 0 auto;
    background: silver;
    padding-right: 10%;
    padding-top: 2%;
    padding-bottom: 2%;
    position: relative;
    width: 100%
`

const StyledLink = styled.span`
    color: black;
    font-size: 30px;
    margin-left: 5%;
    color: white;
    font-weight: bold;
`

const NavBar = () => {
    return(
        <div>
            <StyledNav>
                <NavLink to="/home"><StyledLink>Home</StyledLink></NavLink>
                <NavLink to="/"><StyledLink>Logout</StyledLink></NavLink>
            </StyledNav>
        </div>
    )
}

export default NavBar