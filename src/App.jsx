import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};
export default App;
