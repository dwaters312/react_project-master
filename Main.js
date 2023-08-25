import React, { Component } from "react";
import {
    Route, Routes,
    NavLink,
    HashRouter,
} from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

import discordLogo from "./logo.jpg";

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1><img src={discordLogo} alt="Discord logo" /></h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
                </div>
            </div>
            </HashRouter>
        );
    }
}

export default Main;