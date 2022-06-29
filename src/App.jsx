import React from 'react';
import Intro from './components/intro/Intro';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Footer from './components/footer/Footer';
import Social from './components/social/Social';
import NavFull from './components/nav/NavFull';
import Contact from './components/contact/Contact';
const App = () => {
    return (
        <>
            <Social />
            <Intro />
            <NavFull />
            <Nav />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />

        </>
    )
}



export default App