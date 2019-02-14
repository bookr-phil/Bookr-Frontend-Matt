import React from 'react'
import NavBar from '../components/NavBar'

class NavView extends React.Component {

    logout() {
        localStorage.clear()
    }
    

    render() {
        return(
            <NavBar logout={this.logout} />
        )
    }
}

export default NavView