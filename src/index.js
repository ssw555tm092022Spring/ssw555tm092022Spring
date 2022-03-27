import React from 'react';
import 'antd/dist/antd.css'
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import './index.scss';
import './reset.scss'
import Home from './pages/Home'
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Website from "./pages/Website";
import NavBar from "./pages/Common/NavBar";


class Project extends React.Component {
    constructor(props) {
        super(props);
        const originPics = [
            require('./statics/BgPics/bg1.jpg'),
            require('./statics/BgPics/bg2.jpg'),
            require('./statics/BgPics/bg3.jpg'),
            require('./statics/BgPics/bg4.jpg'),
            require('./statics/BgPics/bg5.jpg'),
            require('./statics/BgPics/bg6.jpg'),
            require('./statics/BgPics/bg7.jpg'),

        ]
        this.state = {
            originPics,
            theme: "dark",
            bgPics: JSON.parse(JSON.stringify(originPics)),
            bgPic: ""
        }
    }
    componentDidMount() {
        this.updateBg();
    }

    updateBg() {

        const bgPics = this.state.bgPics.length === 0 ? [...this.state.originPics]: [...this.state.bgPics]
        console.log(bgPics)
        let bgIndex = Math.floor(Math.random() * bgPics.length)
        let bgPic = bgPics.splice(bgIndex, 1)[0]

        this.setState({
            bgPics,
            bgPic
        })
    }

    changeTheme() {
        // change the theme of website
        this.updateBg()
    }

    render() {

        return (
            <div className="project" style={{background: `url(${this.state.bgPic}) no-repeat`}}>
                <BrowserRouter >
                    <NavBar theme={this.state.theme} changeTheme={() => this.changeTheme()} />
                    <Routes>
                        <Route path="/" element={<Website />} />
                        <Route path="home" element={<Home />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="login" element={<Login />} />
                        <Route path="website" element={<Website />} />
                    </Routes>
                </BrowserRouter>
            </div>


        );
    }
}



// ========================================

ReactDOM.render(
    <Project />,
    document.getElementById('root')
);
