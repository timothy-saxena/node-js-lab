import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    return (
        <Router>
            <nav style={{ padding: "10px", background: "black" }}>
                <Link to="/" style={linkStyle}>
                    Home
                </Link>
                <Link to="/register" style={linkStyle}>
                    Register
                </Link>
                <Link to="/login" style={linkStyle}>
                    Login
                </Link>
                <Link to="/about" style={linkStyle}>
                    About
                </Link>
                <Link to="/contact" style={linkStyle}>
                    Contact
                </Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

const linkStyle = {
    color: "white",
    margin: "10px",
    textDecoration: "none",
};

export default App;
