import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import { motion } from "framer-motion";


const Social = () => {
    return (
        <SocialStyled>
            <motion.div className="icons"
                initial={{ opacity: 0 }}
                animate={{ x: [50, 0] }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <a href="https://www.linkedin.com/in/knowjameskim/" target="blank" className="icon i-linkedin"><LinkedInIcon /></a>
                <a href="https://github.com/320james" target="blank" className="icon i-github"><GithubIcon /></a>
            </motion.div>
        </SocialStyled>
    )
}

const SocialStyled = styled.div`
    
    .icons {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: fixed;
        right: 2.8rem;
        bottom: 40%;
        
        .icon {
            color: var(--primary-color);
            border: 1px solid var(--primary-color);
            border-radius: 50%;
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

        

        &::before {
            content: '';
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: var(--primary-color);
            margin-bottom: 0.5rem;
        }

        &::after {
            content: '';
            margin-top: 0.5rem;
            width: 2px;
            height: 6rem;
            background: var(--primary-color);

        }
        
    }

    @media screen and (max-width: 1024px) {
        visibility: hidden;
    }


`

export default Social