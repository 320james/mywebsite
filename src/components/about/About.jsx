import styled from '@emotion/styled';
import React from 'react'
import avi from '../../assets/avi.jpg';
import Title from '../Title';
import TechnologiesSection from './TechnologiesSection'
import { motion } from "framer-motion";

const About = () => {
    return (
        <AboutStyled id="about" className="container">
            <Title title="</> about me" span="</> about me" />

            <motion.div className="layout"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: [100, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <div className="left-content">
                    <div className="image">
                        <div className="me">
                            <img src={avi} alt="me" />
                        </div>
                    </div>
                </div>

                <div className="right-content">
                    <h3 className="firstHead">
                        As a software engineer at <span>WillowTree®</span>, I infuse my love for web development into crafting digital experiences that are both robust and beautiful. A proud graduate from <span>Virginia Tech</span>, I hold a Bachelor's degree in Computer Science, but my education continues daily in the dynamic field of software development. I'm not just assimilating new knowledge; I'm actively striving to contribute, aiming to catalyze the progression of technological innovation.
                    </h3>
                    <h3>
                        Aside from programming, I am passionate about weightlifting, fly-fishing, skiing, camping, golfing, and basketball.
                    </h3>
                </div>
            </motion.div>
            <TechnologiesSection />
        </AboutStyled>
    )
}

const AboutStyled = styled.section`

    .layout {
        padding-top: 2rem;
        display: grid;
        grid-template-columns: 30% 50%;
        gap: 10%;

        @media screen and (max-width: 600px) {
            grid-template-columns: repeat(1, 1fr);
            gap: 5%;
            text-align: center;
            margin: 0.8rem;
        }

        .left-content {

            width: 100%;
            aspect-ratio: 1/1;
            border-radius:1.5rem;
            background: linear-gradient(45deg, transparent, var(--primary-color));
            display: grid;
            place-items: center;

            @media screen and (max-width: 600px) {
                padding: 0.3rem;
            }

            .me {
                background: linear-gradient(var(--primary-color), transparent);
                border-radius: 1.5rem;
                overflow: hidden;
                transform: rotate(-4deg);
                transition: all .4s ease-in-out;


                &:hover {
                    transform: rotate(0);
                }

                
            }
        }

        .right-content {

            .firstHead {
                position: relative;
                padding-bottom: 1rem;
                margin-bottom: 1rem;
                
                &::before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    width: 8rem;
                    height: 2px;
                    background-color: var(--gray);
                    border-radius: 15px;
                    left: 0;

                    @media screen and (max-width: 600px) {
                        left: 50%;
                        transform: translateX(-50%);
                        width: 10rem;
                    }
                }


            }

            h3 {
                padding-bottom: 1rem;
            }

        }


        
    }


    

`

export default About