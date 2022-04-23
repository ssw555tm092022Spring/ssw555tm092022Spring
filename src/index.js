import React from 'react';
import 'antd/dist/antd.css'
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Routes,
    Route,
} from "react-router-dom";
import './index.scss';
import './reset.scss'
import Home from './pages/Home'
import Contact from "./pages/Contact";
import Website from "./pages/Website";
import NavBar from "./pages/Common/NavBar";
import Footer from "./pages/Common/Footer"

class Project extends React.Component {
    constructor(props) {
        super(props);
        const originPics = [
            "#ffb6b9",
            "#fae3d9",
            "#bbded6",
            "#8ac6d1",
            "#fff1ac",
            "#f9bcdd",
            "#d5a4cf",
            "#b689b0"
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
            <div className="project" style={{background: `${this.state.bgPic}`}}>
                <HashRouter basename="/">
                    <NavBar theme={this.state.theme} changeTheme={() => this.changeTheme()} />
                    <Website></Website>
                    <Footer></Footer>
                </HashRouter>
            </div>


        );
    }
}



// ========================================

ReactDOM.render(
    <Project />,
    document.getElementById('root')
);
