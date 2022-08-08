import React from 'react';
import styled from 'styled-components';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

const CTA = () => {
    return (
        <CTAStyled>
            <a href="mailto:320james@gmail.com" className="btn" target="blank"><SendOutlinedIcon className="send" /> Message</a>
            <a href="" className="btn-primary" target="blank"><SchoolOutlinedIcon className="school" /> Resume</a>
        </CTAStyled>
    )
}

const CTAStyled = styled.div`

    margin-top: 4rem;
    
    .btn {
        width: max-content;
        display: inline-block;
        background: transparent;
        color: var(--primary-color);
        padding: 0.65rem 1rem;
        border-radius: 0.4rem;
        cursor: pointer;
        border: 1px solid var(--primary-color);
        transition: all .4s ease-in-out;
        min-width: 7.3rem;
        font-size: 1.2rem;
        text-align: center;

        
        &:hover {
            color: var(--dark-gray);
            background: var(--primary-color);
            opacity: 0.4;
        }
        &:not(:last-child) {
             margin-right: 1rem;    
        }

        .send {
            vertical-align: middle;
            font-size: inherit;
            padding-bottom: 3px;
        }
    }


    .btn-primary {
        width: max-content;
        display: inline-block;
        background: var(--primary-color);
        color: var(--dark-gray);
        padding: 0.65rem 1rem;
        border-radius: 0.4rem;
        cursor: pointer;
        border: 1px solid transparent;
        transition: all .4s ease-in-out;
        min-width: 7.3rem;
        font-size: 1.2rem;
        text-align: center;

        
        &:hover {
            color: var(--primary-color);
            background: var(--dark-gray);
            border: 1px solid var(--primary-color);
            opacity: 0.6;
        }
        &:not(:last-child) {
             margin-right: 1rem;    
        }


        .school {
            vertical-align: middle;
            font-size: inherit;
            padding-bottom: 3px;
        }
    }

    @media screen and (max-width: 600px) {

        .btn, .btn-primary {
            padding: 0.55rem 1rem;
            min-width: 6rem;
            font-size: 1rem;
        }

    }
`

export default CTA