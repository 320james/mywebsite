import React from 'react'
import styled from 'styled-components';
import { motion } from "framer-motion";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';

const Footer = () => {
    return (
        <FooterStyled>

            <motion.div
                className="footer-container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: [100, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 2 }
                }>
                <p>Created by James Kim</p>
                <p>All rights reserved. ©</p>
            </motion.div>

            <motion.div
                className="icons"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: [100, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 1 }
                }>
                <a href="https://www.linkedin.com/in/knowjameskim/" target="blank" className="icon i-linkedin"><LinkedInIcon /></a>
                <a href="https://github.com/320james" target="blank" className="icon i-github"><GithubIcon /></a>
            </motion.div>
        </FooterStyled>
    )
}


const FooterStyled = styled.footer`
    

    .footer-container {
        padding-top: 4rem;
        padding-bottom: 2rem;
        text-align: center;

        @media screen and (max-width: 1024px) {
            padding-bottom: 1rem;
        }

    }

    .icons {
        display: none;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 7rem;        

        @media screen and (max-width: 1024px) {
            display: flex;
        }
        
        .icon {
            color: var(--primary-color);
            
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            padding: 5px;
            margin: 4px;
            transition: all .6s ease-in-out;

            &:hover {
                color: var(--gray);
                border-color: var(--gray);
            }
        }

    }

`

export default Footer