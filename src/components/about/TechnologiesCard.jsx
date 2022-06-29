import React from 'react';
import styled from 'styled-components';
import { motion } from "framer-motion";

function TechnologiesCard({ image, title, paragraph }) {

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: [100, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 1 }
            }>
            <TechnologiesCardStyle>
                <motion.div className="box"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, y: [100, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }
                    }>
                    <h4>{title}</h4>

                </motion.div>
                <div className="list-box">
                    <ul>{
                        paragraph.map((skill, i) => {
                            return (
                                <motion.li
                                    key={i}
                                    className="list"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1, y: [100, 0] }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.3 + i / 8 }
                                    }
                                >
                                    {skill}
                                </motion.li>
                            )

                        })
                    }</ul>

                </div>

            </TechnologiesCardStyle >
        </motion.div>

    );
}

const TechnologiesCardStyle = styled.div`
    background-color: var(--light-navy);
    border-left: 0.5px solid var(--gray);
    border-right: 0.5px solid var(--gray);
    border-top: 4px solid var(--gray);
    border-bottom: 0.5px solid var(--gray);
    transition: all .4s ease-in-out;
    margin-top: 2rem;
    border-radius: 2rem;


    .list-box {
        padding-left: 1rem;
        padding-bottom: 1.2rem;
        ul {
            display: grid;
            list-style-type: none;
            grid-template-columns: repeat(2, 1fr);
            .list {
                &::before {
                content: "▹";
                margin-right: 0.4rem;
                color: var(--primary-color);
                left: 0;
                }
            }
        }
    }

    

    &:hover {
        border-top: 5px solid var(--primary-color);
        transform: translateY(3px);
    }
    
    .box {
        display: flex;
        flex-direction: column;
        

        h4 {
            color: var(--primary-color);
            font-size: 1.6rem;
            margin: 1rem 1.3rem;
            position: relative;

            &::after {
                content: "";
                width: 4rem;
                background-color: var(--gray);
                height: 2px;
                position: absolute;
                left: 0;
                bottom: 0;
                border-radius: 10px;
            }
        }

       
        
    }
    
    
`;

export default TechnologiesCard;