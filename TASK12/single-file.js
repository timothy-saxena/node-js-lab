import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
    return (
        <Router>
            <nav style={{ padding: "10px", background: "black" }}>
                <Link to="/" style={linkStyle}>
                    Home
                </Link>

                <Link to="/products" style={linkStyle}>
                    Products
                </Link>

                <Link to="/cart" style={linkStyle}>
                    Cart
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
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
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

export default function Home() {
    return (
        <div>
            <h2>Shopping Mall</h2>
            <p>Welcome to our shopping mall.</p>
        </div>
    );
}

export default function Products() {
    return (
        <div>
            <h2>Products</h2>

            <p>T-Shirt - ₹500</p>
            <button>Add to Cart</button>

            <br />
            <br />

            <p>Shoes - ₹2000</p>
            <button>Add to Cart</button>

            <br />
            <br />

            <p>Watch - ₹1500</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default function Cart() {
    return (
        <div>
            <h2>Shopping Cart</h2>

            <p>T-Shirt - Quantity: 2</p>
            <p>Watch - Quantity: 1</p>

            <button>Checkout</button>
        </div>
    );
}

export default function About() {
    return <h2>About Shopping Mall</h2>;
}


export default function Contact() {
    return (
        <div>
            <h2>Contact Us</h2>
            <p>Email: shoppingmall@gmail.com</p>
            <p>Phone: +91 9876543210</p>
        </div>
    );
}
/* 
shopping-mall
│
├── src
│   ├── App.js
│   └── pages
│       ├── Home.js
│       ├── Products.js
│       ├── Cart.js
│       ├── About.js
│       └── Contact.js
│
└── package.json


npx create-react-app shopping-mall

cd shopping-mall

npm install react-router-dom

npm start 

*/