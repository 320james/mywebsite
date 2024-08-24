import React from 'react';
import styled from 'styled-components';
import TechnologiesCard from './TechnologiesCard';
import software from '../../assets/software-development.svg';
import web from '../../assets/web-development.svg';
import mobile from '../../assets/mobile-development.svg';

function TechnologiesSection() {
  return (
    <div>
      <TechnologiesSectionStyled>
        <h3>Here are some of the technologies I've worked with:</h3>
        <div className="technologies">
          {
            <TechnologiesCard
              image={software}
              title={'Backend / Cloud'}
              paragraph={['NodeJS', 'Express', 'AWS', 'GCP', 'Java', 'IaC']}
            />
          }
          {
            <TechnologiesCard
              image={web}
              title={'Web Development'}
              paragraph={[
                'TS/JS ES6+',
                'HTML & CSS',
                'ReactJS',
                'NextJS',
                'Responsive Design',
              ]}
            />
          }
          {
            <TechnologiesCard
              image={mobile}
              title={'Misc'}
              paragraph={[
                'Agile',
                'CI/CD',
                'E2E Jest',
                'Cypress',
                'Git',
                'OAuth 2.0',
              ]}
            />
          }
        </div>
      </TechnologiesSectionStyled>
    </div>
  );
}

const TechnologiesSectionStyled = styled.section`
  margin-top: 3rem;
  h3 {
    margin-bottom: 0;

    &::before {
      content: '▹';
      padding-right: 1rem;
      color: var(--primary-color);
      left: 0;
    }

    @media screen and (max-width: 600px) {
      margin-top: -1rem;
      text-align: center;
    }
  }

  .technologies {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    width: 90%;

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
      grid-gap: 0.2rem;
    }
  }
`;

export default TechnologiesSection;
