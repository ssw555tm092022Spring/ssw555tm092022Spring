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
        this.state = {
            theme: "dark"
        }
    }

    changeTheme() {
        // change the theme of website
        this.setState({
            theme: this.state.theme === "dark" ? "light" : "dark"
        })
    }

    render() {

        return (
            <div className="project" style={{background: this.state.theme === "dark" ? "#f0f2f4" : "#00dfc8"}}>
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
