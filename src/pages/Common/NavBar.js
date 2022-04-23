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

    jumpFishGame() {
        window.location.href = window.location.href.replace("build/index.html", "Game3/index.html")
    }

    render() {
        return (
            <div className="navbar">

                <div className="logo">
                    <Link to="/website"><strong>Calmify</strong></Link>
                </div>

                <div id="aplayer" className="aplayer"></div>
                <Button type="primary" onClick={() => this.props.changeTheme()}>Mode</Button>
            </div>
        )
    }
}

export default NavBar