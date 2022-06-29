import React from 'react'
import { GoHome } from 'react-icons/go'
import { BiUser } from 'react-icons/bi'
import { GiBookshelf } from 'react-icons/gi'
import { BiCodeAlt } from 'react-icons/bi'
import styled from 'styled-components'
import { useState } from 'react'
import { motion } from "framer-motion";

const Nav = () => {

    const [activeNav, setActiveNav] = useState("#home");

    return (

        <NavStyled>
            <motion.div className="navs"
                initial={{ opacity: 0 }}
                animate={{ y: [50, 0] }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><GoHome /></a>
                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser /></a>
                <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GiBookshelf /></a>
                <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiCodeAlt /></a>

            </motion.div>

        </NavStyled>
    )
}

const NavStyled = styled.nav`
    
    width: max-content;
    
    z-index: 2;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 1.4rem;
    
    
    visibility: hidden;
    .navs {
        display: flex;
        background: rgba(0,0,0,0.2);
        width: max-content;
        padding: 0.7rem 1.7rem;
        gap: 0.8rem;
        border-radius: 3rem;
        backdrop-filter: blur(6px);
    
    a {
        color: var(--primary-color);
        background: transparent;
        padding: 0.7rem;
        border-radius: 50%;
        display: flex;
        font-size: 1rem;

        &:hover {
            background: rgba(0,0,0,0.4);

        }

        &.active {
            background: #262626;
        }
    }

    @media screen and (max-width: 1024px) {
        visibility: visible;
    }
    }
`

export default Nav