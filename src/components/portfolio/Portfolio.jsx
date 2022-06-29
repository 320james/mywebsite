import React from 'react'
import styled from 'styled-components'
import Title from '../Title'
import { motion } from "framer-motion"
import showcaseData from './showcaseData'
import PortfolioLinks from './PortfolioLinks'
import portfolioData from './portfolioData'

// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Portfolio = () => {
    return (
        <PortfolioStyled id="portfolio" className="container">
            <Title title="</> portfolio" span="</> porfolio" />

            <motion.div className="layout"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: [100, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >

                <Swiper className="swiper"
                    modules={[Navigation, Pagination, A11y]}
                    spaceBetween={40}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}>

                    {
                        showcaseData.map(({ title, image, github, githubLink, video, videoLink, liveDemo, liveDemoLink, technologies, description }, index) => {
                            return (
                                <SwiperSlide key={index} className="slide">
                                    <div className="content">
                                        <h2>{title}</h2>
                                        <p>{description}</p>
                                        <span>{technologies}</span>
                                        <PortfolioLinks github={github} githubLink={githubLink} video={video} videoLink={videoLink} liveDemo={liveDemo} liveDemoLink={liveDemoLink} />
                                    </div>
                                    <img src={image} alt="" />

                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>


            </motion.div>

            <div className="portfolio-items">
                {
                    portfolioData.map(({ title, github, githubLink, video, videoLink, liveDemo, liveDemoLink, technologies, description }, index) => {
                        return (
                            <motion.div className="item"

                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1, y: [150, 0] }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: index / 10 }
                                }>
                                <div className="item-content">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                    <div className="links">
                                        <span>{technologies}</span>

                                        <PortfolioLinks github={github} githubLink={githubLink} video={video} videoLink={videoLink} liveDemo={liveDemo} liveDemoLink={liveDemoLink} />
                                    </div>

                                </div>
                            </motion.div>

                        )
                    })
                }

            </div>


        </PortfolioStyled>
    )


}

const PortfolioStyled = styled.section`
    // Portfolio item cards
    .portfolio-items {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
        width: 90%;
        

        .item {
            background: var(--light-navy);
            padding: 1.4rem 1.75rem;
            border-radius: 1rem;
            transition: all .4s ease-in-out;
            position: relative;

            &:hover {
                background-color: var(--hover-navy);
                transform: translate3d(2px, -2px, 2px);
            }

            h2 {
                color: var(--light-gray);
                font-size: 1.7rem;
                padding-bottom: 0.8rem;
            }
            p {
                color: var(--gray);
                font-size: 1.2rem;
                line-height: 1.2;
                padding-bottom: 10rem;

            }

            .links {
                position: absolute;
                bottom: 2rem;


                .icon {
                    padding-top: 0.5rem;
                    margin: 0;
                    margin-right: 12px;
                }
            }
            

        }

        

        

        
        @media screen and (max-width: 1024px) {
            width: 100%;
            flex-direction: column;
            padding: 0 1rem;
        }
        @media screen and (max-width: 950px) {
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width: 600px) {
            grid-template-columns: repeat(1, 1fr);
        }
        
    }


    // Swiper 
    .layout {
        padding-top: 2rem;
        margin-bottom: 3rem;
        .swiper {
            width: 90%;
            padding-bottom: 4rem;
            margin-left: 0;

            @media screen and (max-width: 1024px) {
                width: 100%;
            }
            

            .slide {
                position: relative;
                
                .content {
                    position: absolute;
                    z-index: 5;
                    top: 70%;
                    left: 50%;
                    transform: translate(-50%, -70%);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    column-gap: 2rem;
                    text-align: center;
                    width: 65%;

                    h2 {
                        font-size: 2rem;
                        color: var(--light-gray);
                    }
                    p {
                        color: var(--light-gray);
                        font-size: 1.2em;
                        line-height: 1.1;
                    }
                    span {
                        font-size: 1.2rem;
                        color: var(--primary-color);
                    }

                    @media screen and (max-width: 700px) {
                        width: 85%;
                        h2 {
                            font-size: 1.4rem;
                            line-height: 1;
                        }
                        p{ 
                            font-size: 0.9rem;
                            line-height: 0.9;
                            padding-bottom: 0.5rem;
                        }
                        span {
                            font-size: 0.8rem;
                            line-height: 1;
                            padding-bottom: 1rem;
                        }

                    }

                }

                img {
                    object-fit: contain;
                    opacity: 0.4;
                    border-radius: 2rem;
                }

            }
        }


    }

    .swiper-pagination-bullet, .swiper-pagination-bullet-active{
        background: var(--primary-color);
        width: 2.3rem;
        height: 0.2rem;
        border-radius: 0;
    }
    

    .swiper-button-prev, .swiper-button-next, .swiper-button-disabled {
        color: var(--primary-color);

        @media screen and (max-width: 1024px) {
            display: none;
        }
    }

`

export default Portfolio