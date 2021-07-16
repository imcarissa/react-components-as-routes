import React from 'react'
import { Navlink } from 'react-router-dom';

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

class Navbar extends React.Component {
    render () {
        reutrn (           
            <div>
                <Navlink to="/"
                            exact
                            style={link}
                            activeStyle={{
                                background: 'darkblue'
                            }}>Home</Navlink>
                <NavLink to="/about"
                            exact
                            style={link}
                            activeStyle={{
                                background: 'darkblue'
                            }}>About</NavLink>
                <Navlink to="/login"
                            exact
                            style={link}
                            activeStyle={{
                                background: 'darkblue'
                            }}>Login</Navlink>
            </div>
        )
    }
}

export default Navbar;