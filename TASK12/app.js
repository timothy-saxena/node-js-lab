import React from "react";
import { BrowserRouter as R, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    return (
        <R>
            <nav style={{ padding: "10px", background: "#333", color: "#fff" }}>
                <Link to="/" style={{ color: "#fff", margin: "10px" }}>
                    Home
                </Link>
                <Link to="/register" style={{ color: "#fff", margin: "10px" }}>
                    Register
                </Link>
                <Link to="/login" style={{ color: "#fff", margin: "10px" }}>
                    Login
                </Link>
                <Link to="/about" style={{ color: "#fff", margin: "10px" }}>
                    About
                </Link>
                <Link to="/contact" style={{ color: "#fff", margin: "10px" }}>
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
        </R>
    );
}

export default App;
