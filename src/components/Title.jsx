import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";


function Title({ title, span, order }) {
    return (
        <motion.div className="navs"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [100, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        >
            <TitleStyled>

                <h2>{title} <b><span>{span}</span></b></h2>

            </TitleStyled>
        </motion.div>
    );
}

const TitleStyled = styled.div`
    h2 {
        color: var(--light-gray);
        font-size: 3rem;
        position: relative;
        padding-bottom: 0.2rem;


        @media screen and (max-width: 600px) {
            font-size: 1.8rem;
        }

        &::before {
            content: "";
            position: absolute;
            bottom: 20%;
            width: 30rem;
            height: 1px;
            background-color: var(--light-gray);
            border-radius: 15px;
            left: 0;
            opacity: 0.8;

            @media screen and (max-width: 600px) {
                width: 10rem;
                bottom: 15%;
            }
        }
        &::after {
            content: "";
            position: absolute;
            bottom: 20%;
            width: 22rem;
            height: 1px;
            background-color: var(--primary-color);
            border-radius: 15px;
            left: 0;

            @media screen and (max-width: 600px) {
                width: 7rem;
                bottom: 15%;
            }
        }

        span {
            font-weight: 900;
            color: #8b8b8b70;
            opacity: 0.25;
            font-size: 3.8rem;
            position: absolute;
            left: 6px;
            top: 16%;
            z-index: -1;


            @media screen and (max-width: 600px) {
                font-size: 2.8rem;
            }

        }
    
    }
`;

export default Title;