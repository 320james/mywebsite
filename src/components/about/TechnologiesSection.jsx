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
                    {<TechnologiesCard
                        image={web}
                        title={'Web Development'}
                        paragraph={['HTML & CSS', 'JS ES6+', 'React.js', 'Node.js', 'Express.js', 'MongoDB']}
                    />}
                    {<TechnologiesCard
                        image={mobile}
                        title={'Mobile Development'}
                        paragraph={['iOS', 'SwiftUI', 'XCode', 'Responsive Web', 'Media Queries', 'Java']}
                    />}
                    {<TechnologiesCard
                        image={software}
                        title={'Software Development'}
                        paragraph={['Agile', 'OOP', 'Optimization', 'Design Principles', 'Version Control', 'REST Api']}
                    />}


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
            content: "▹";
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