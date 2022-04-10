import React from 'react';
import {Link} from "react-router-dom";
import { Button } from 'antd';
import './NavBar.scss'
import APlayer from 'APlayer';
import 'APlayer/dist/APlayer.min.css';

class NavBar extends React.Component {

    componentDidMount() {
        // initialize audio player
        this.setState({
            ap: new APlayer({
                container: document.getElementById('aplayer'),
                listFolded: true,
                autoplay: true,
                order:'random',
                audio: [{
                    name: 'Conon',
                    artist: 'Relax',
                    url: require('../../music/Canon.mp3'),
                    cover: require('../../statics/Music/Canon.png'),
                    autoplay: true
                },{
                    name: 'Weightless',
                    artist: 'Relax',
                    url: require('../../music/Weightless.mp3'),
                    cover: require('../../statics/Music/Weightless.png'),
                    autoplay: true
                },{
                    name: 'Carrying you',
                    artist: 'Relax',
                    url: require('../../music/Carrying you.mp3'),
                    cover: require('../../statics/Music/Carrying you.png'),
                    autoplay: true
                }]
            })
        })

    }

    render() {
        return (
            <div className="navbar">

                <div className="logo">
                    <Link to="/website"><strong>Calmify</strong></Link>
                </div>

                <nav>
                    <ul className="menu-items" id='MenuItems'>
                        <div id="aplayer"></div>
                        <li><Button type="primary" onClick={() => this.props.changeTheme()}>✧</Button></li>
                        <li><Link to="/website">Home</Link></li>
                        {/*<li><Link to="/home">About Us</Link></li>*/}
                        {/*<li><Link to="/contact">Contact</Link></li>*/}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar