import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./components/ProductDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Checkout from "./pages/Checkout";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import Error from "./pages/Error";
import ScrollToTop from "./components/ScrollToTop";
import LoginCard from "./pages/Login";
import Blog from "./pages/Blog";
import useFetch from "./hooks/useFetch";

const App = () => {
    let { loading, error, data } = useFetch(
        "http://localhost:1337/api/blogs?populate=*"
    );
    if (loading)
        return (
            <div class="flex space-x-2 justify-center items-center bg-white h-screen dark:invert">
                <span class="sr-only">Loading...</span>
                <div class="h-6 w-6 bg-secondary rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div class="h-6 w-6 bg-secondary rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div class="h-6 w-6 bg-secondary rounded-full animate-bounce"></div>
            </div>
        );
    if (error) return <p>Error!</p>;
    // console.log(data);

    return (
        <div className="overflow-hidden">
            <Router>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route
                        path="/"
                        element={<Home blogs={data ? data : ""} />}
                    />
                    <Route path="/shop" element={<Shop />} />
                    <Route
                        path="/shop/:productId"
                        element={<ProductDetails />}
                    />
                    <Route path="/shop/checkout" element={<Checkout />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/login" element={<LoginCard />} />
                    <Route
                        path="/*"
                        element={<Error />}
                        className=" container"
                    />
                    <Route
                        path="/login"
                        element={<LoginCard />}
                        className=" container"
                    />
                    <Route
                        path="/blog"
                        element={<Blog blogs={data ? data : ""} />}
                        className=" container"
                    />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
