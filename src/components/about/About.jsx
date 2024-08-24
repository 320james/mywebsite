import styled from '@emotion/styled';
import React from 'react';
import avi from '../../assets/avi.jpg';
import Title from '../Title';
import TechnologiesSection from './TechnologiesSection';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <AboutStyled id="about" className="container">
      <Title title="</> about" span="</> about" />

      <motion.div
        className="layout"
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
            As a Platform Software Engineer at <span>WillowTree®</span>, I
            infuse my love for development into crafting digital experiences
            that are both robust and beautiful. A proud graduate of{' '}
            <span>Virginia Tech</span> with a Bachelor's degree in Computer
            Science, I continue to learn and grow in the dynamic field of
            software development. My work spans integrating solutions and
            delivering complex projects, optimizing codebases, and implementing
            cloud infrastructure, all while adapting to diverse environments. I
            am not only focused on assimilating new knowledge but also on
            actively contributing to technological innovation, striving to
            deliver impactful solutions that enhance client satisfaction and
            drive business success.
          </h3>
          <h3>
            Aside from computer-things, I am passionate about fly-fishing,
            skiing, golfing, and weight-lifting.
          </h3>
        </div>
      </motion.div>
      <TechnologiesSection />
    </AboutStyled>
  );
};

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
      border-radius: 1.5rem;
      background: linear-gradient(45deg, transparent, var(--primary-color));
      display: grid;
      place-items: center;

      @media screen and (max-width: 600px) {
        padding: 0.3rem;
        width: 80%;
        justify-self: center;
      }

      .me {
        background: linear-gradient(var(--primary-color), transparent);
        border-radius: 1.5rem;
        overflow: hidden;
        transform: rotate(-4deg);
        transition: all 0.4s ease-in-out;

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
          content: '';
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
`;

export default About;
