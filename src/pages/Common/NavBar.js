import React from 'react';
import {Link} from "react-router-dom";
import { Button } from 'antd';
import './NavBar.scss'

class NavBar extends React.Component {



    render() {
        return (
            <div className="navbar">
                <div className="logo">
                    <Link to="/website"><strong>Calmify</strong></Link>
                </div>

                <nav>
                    <ul className="menu-items" id='MenuItems'>
                        <li><Button type="primary" onClick={() => this.props.changeTheme()}>✧</Button></li>
                        <li><Link to="/website">Home</Link></li>
                        <li><Link to="/home">About Us</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar