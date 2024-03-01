import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header/";
import Footer from "./components/Footer/";
import Home from "./pages/Home";
import Headphones from "./pages/Category/Headphones";
import Speakers from "./pages/Category/Speakers";
import Earphones from "./pages/Category/Earphones";
import ProductDetail from "./pages/ProductDetail";
import CartModal from "./components/CartModal";
import CheckoutPage from "./pages/CheckoutPage";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  Aos.init({
    once: true,
  });

  return (
    <>
      <GlobalStyle />
      <ScrollToTop />
      <CartModal />
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/earphones" element={<Earphones />} />
        <Route path="/product_detail/:id" element={<ProductDetail />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
