import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import axios from 'axios';
import CTA from './CTA';
import { motion } from "framer-motion";

const Intro = () => {

    const url = 'https://api.quotable.io/random';
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");


    useEffect(() => {
        axios.get(url).then(response => {
            setQuote(response.data.content);
            setAuthor(response.data.author);

        })
            .catch(error => console.error(error));
    }, [])

    return (
        <IntroStyled className="container" id="home">
            <Typist className="MyTypist">
                <h1>oh, <span>hello</span> there... </h1>
                <Typist.Backspace count={21} delay={100} />
                <h1>i'm <span>jah</span></h1>
                <Typist.Backspace count={1} delay={100} />
                <h1><span>mes.</span></h1>
            </Typist>



            <motion.div
                initial={{ opacity: 0 }}
                animate={{ y: [100, 0], opacity: 1 }}
                transition={{ duration: 1 }}
                className="description">

                <h2>I am a software engineer.</h2>
                <h3><span>"</span>{quote}<span>"</span></h3>
                <h3><span>- </span>{author}</h3>

            </motion.div>

            <motion.div initial={{ opacity: 0 }}
                animate={{ y: [100, 0], opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}>
                <CTA />
            </motion.div>


        </IntroStyled>
    )
}

const IntroStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
    padding-top: 10%;

    .Typist .Cursor {
        display: inline-block; 
        font-size: 6rem;
        color: var(--primary-color);
    }
  
    .Typist .Cursor--blinking {
        opacity: 1;
        animation: blink 1s linear infinite; 
    }

    @keyframes blink {
    0% {
        opacity: 1; }
    50% {
        opacity: 0; }
    100% {
        opacity: 1; }
    }

    h2 {
        font-size: 2.2rem;
        margin-top: -2rem;
        margin-bottom: 0.3rem;
    }

    h3 {
        max-width: 80%;
    }


    /* MEDIA QUERIES Med*/
    @media screen and (max-width: 1024px) {
        align-items: center;
        justify-content: center;
        text-align: center;

        h3 {
            max-width: none;
        }

        
    }

    /* MEDIA QUERIES Sm*/
    @media screen and (max-width: 600px) {

        .Typist .Cursor {
            display: inline-block; 
            font-size: 2.5rem;
            color: var(--primary-color);
        }
  
        .Typist .Cursor--blinking {
            opacity: 1;
            animation: blink 1s linear infinite; 
        }

        h1 {
            font-size: 2.5rem;
            margin-top: -1rem;
            margin-bottom: 0.3rem;

            span {
                font-size: 2.5rem;
            }
        }

        h2 {
            font-size: 1.3rem;
            margin-top: -1rem;
        }

        h3 {
            font-size: 1rem;
            max-width: none;
            line-height: 1.1;
            margin-bottom: 0.5rem;
            word-spacing: 2px;
            span {
                font-size: 1rem;
                color: var(--primary-color);
                text-align: center;
            }
        }   
    }



`



export default Intro