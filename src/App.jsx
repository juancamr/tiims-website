import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { routes } from "./common/constants";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
          {routes.map((route) => (
            <Route path={route.path} Component={route.component} />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;