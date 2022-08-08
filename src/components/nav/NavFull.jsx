import React from 'react'

import styled from 'styled-components'
import { useState } from 'react'
import { motion } from "framer-motion";

const NavFull = () => {

    const [activeNavFull, setActiveNavFull] = useState("#home");

    return (
        <NavFullStyled>

            <motion.div className="navs"
                initial={{ opacity: 0 }}
                animate={{ y: [50, 0] }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
            >
                <a href="#home" onClick={() => setActiveNavFull('#home')} className={activeNavFull === '#home' ? 'active' : ''}>/home</a>
            </motion.div>
            <motion.div className="navs"
                initial={{ opacity: 0 }}
                animate={{ y: [50, 0] }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
            >
                <a href="#about" onClick={() => setActiveNavFull('#about')} className={activeNavFull === '#about' ? 'active' : ''}>/about</a>
            </motion.div>
            <motion.div className="navs"
                initial={{ opacity: 0 }}
                animate={{ y: [50, 0] }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
            >
                <a href="#experience" onClick={() => setActiveNavFull('#experience')} className={activeNavFull === '#experience' ? 'active' : ''}>/experience</a>
            </motion.div>
            <motion.div className="navs"
                initial={{ opacity: 0 }}
                animate={{ y: [50, 0] }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
            >
                <a href="#portfolio" onClick={() => setActiveNavFull('#portfolio')} className={activeNavFull === '#portfolio' ? 'active' : ''}>/portfolio</a>
            </motion.div>
            <motion.div className="navs"
                initial={{ opacity: 0 }}
                animate={{ y: [50, 0] }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
            >
                <a href="#contact" onClick={() => setActiveNavFull('#contact')} className={activeNavFull === '#contact' ? 'active' : ''}>/contact</a>
            </motion.div>



        </NavFullStyled>
    )
}

const NavFullStyled = styled.nav`


    background: transparent;
    position: fixed;
    z-index: 5;

    right: 3rem;
    bottom: 6rem;
    display: flex;
    flex-direction: column;

    .navs {
        display: flex;
        flex-direction: column;

    a {
        color: var(--primary-color);
        background: transparent;
        font-size: 1.1rem;
        margin-left: auto;
        transition: all .6s ease-in-out;

        &:hover {
            color: var(--gray);
            
        }

        &.active {
        
        }
    }

    @media screen and (max-width: 1024px) {
        visibility: hidden;
    }

}

`

export default NavFull