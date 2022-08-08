import React from 'react'
import styled from 'styled-components'
import { motion } from "framer-motion";
import Title from '../Title';
import ExperienceTabs from './ExperienceTabs'

const Experience = () => {
    return (
        <ExperienceStyled id="experience" className="container">
            <Title title="</> experience" span="</> experience" />

            <motion.div className="layout"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: [100, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <ExperienceTabs className="vertical" />
            </motion.div>



        </ExperienceStyled>
    )
}

const ExperienceStyled = styled.section`
    .layout {
        padding-top: 2rem;
        min-height: 24rem;
    }

    

    

`

export default Experience