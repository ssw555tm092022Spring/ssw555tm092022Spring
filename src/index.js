import React from 'react';
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

class Game extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            // router map
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Website />} />
                    <Route path="home" element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="login" element={<Login />} />
                    <Route path="website" element={<Website />} />
                </Routes>
            </BrowserRouter>
        );
    }
}



// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
