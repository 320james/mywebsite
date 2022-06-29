import React, { useState, useEffect } from 'react';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { withStyles, useMediaQuery } from '@material-ui/core';
import styled from 'styled-components';
import { motion } from "framer-motion";

function ExperienceTabs() {


    const [value, setValue] = React.useState(0);
    const mediumViewport = useMediaQuery('(min-width:600px)');


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (

        <Layout>
            <VerticalTabs
                value={value}
                onChange={handleChange}
                orientation={mediumViewport ? "vertical" : "horizontal"}
            >
                <MyTab label={mediumViewport ? "WillowTree" : "00."} />
                <MyTab label={mediumViewport ? "Verizon" : "01."} />
                <MyTab label={mediumViewport ? "Verizon" : "02."} />
                <MyTab label={mediumViewport ? "Hoppys" : "03."} />

            </VerticalTabs>
            <TabContainerStyled>
                {value === 0 &&
                    <div className="list-content">
                        <h2>Software Engineer | <span>WillowTree®</span></h2>
                        <h3>AUG 2022 - CURRENT</h3>
                        <motion.div
                            className="list"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, y: [100, 0] }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus animi debitis laboriosam sapiente laborum illo illum at qui corrupti maxime?
                        </motion.div>
                        <motion.div
                            className="list"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, y: [100, 0] }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ipsa illo ipsam odit optio nisi dolorum commodi? Deserunt, aperiam atque?
                        </motion.div>
                        <motion.div
                            className="list"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, y: [100, 0] }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ipsa illo ipsam odit optio nisi dolorum commodi? Deserunt, aperiam atque?
                        </motion.div>
                    </div>

                }
                {value === 1 &&

                    <div className="list-content">
                        <h2>Software Engineer | <span>WillowTree®</span></h2>
                        <h3>AUG 2022 - CURRENT</h3>
                        <motion.div
                            className="list"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, y: [100, 0] }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus animi debitis laboriosam sapiente laborum illo illum at qui corrupti maxime?
                        </motion.div>
                        <motion.div
                            className="list"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, y: [100, 0] }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ipsa illo ipsam odit optio nisi dolorum commodi? Deserunt, aperiam atque?
                        </motion.div>
                        <motion.div
                            className="list"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, y: [100, 0] }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ipsa illo ipsam odit optio nisi dolorum commodi? Deserunt, aperiam atque?
                        </motion.div>
                    </div>
                }
                {value === 2 &&

                    <div className="list-content">

                    </div>
                }
            </TabContainerStyled>
        </Layout>
    )

}

const Layout = styled.div`
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }

`

const VerticalTabs = withStyles(theme => ({
    flexContainer: {
        flexDirection: 'column',
        '@media screen and (max-width: 600px)': {
            flexDirection: 'row',
        },



    },
    indicator: {
        backgroundColor: 'var(--primary-color)',

    }

}))(Tabs)

const MyTab = withStyles(theme => ({
    root: {
        display: 'flex',
        '@media screen and (max-width: 600px)': {
            fontSize: '1rem'
        },

    },
    selected: {
        color: 'var(--primary-color)',
        // borderRight: '2px solid var(--primary-color)',
        '@media screen and (max-width: 600px)': {
            // borderRight: 'none',
            // borderBottom: '2px solid var(--primary-color)',
        }
    },
    wrapper: {

        alignItems: 'self-start',
        '@media screen and (max-width: 600px)': {
            alignItems: 'center'
        }
    },

}))(Tab);


const TabContainerStyled = styled.div`

    padding-left: 2rem;
    width: 70%;

    @media screen and (max-width: 600px) {
        width: 100%;
        padding: 2rem;

    }

    h2 {
        font-size: 2rem;
        line-height: 1;
        padding-bottom: 0.4rem;
        color: var(--light-gray);
        span {
            color: var(--primary-color);
        }

        @media screen and (max-width: 600px) {
            font-size: 1.4rem;
            text-align: center;
        }
    }

    h3 {
        font-size: 1.2rem;
        padding-bottom: 1rem;

        @media screen and (max-width: 600px) {
            font-size: 1rem;
            text-align: center;
        }
    }

    .list {
        padding-bottom: 10px;
        font-size: 1.2rem;
        &::before {
            content: "▹";
            padding-right: 0.4rem;
            color: var(--primary-color);
            left: 0;
        }
    }

`


export default ExperienceTabs;