import styled from '@emotion/styled';
import React, { useRef, useState } from 'react';
import Title from '../Title';
import { motion } from "framer-motion";
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import emailjs from 'emailjs-com';


const Contact = () => {
    const initialText = 'Send'
    const [buttonText, setButtonText] = useState(initialText);

    function handleClick() {
        setButtonText('Sent!');

        setTimeout(() => {
            setButtonText(initialText);
        }, 3000);
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e8dw5h8', 'template_2w6xfc9', form.current, 'Qt_CRCjaJwmHkBZz8');
        handleClick();
        e.target.reset();

    };

    return (
        <ContactStyled id="contact" className="container">
            <Title title="</> contact" span="</> contact" />

            <motion.div className="layout"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1, y: [100, 0] }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <h2>Let's get in touch.</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder="Your Full Name" required />
                    <input type="email" name='email' placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message"></textarea>
                    <button type="submit" className="btn"><p><SendOutlinedIcon className="send" />{buttonText}</p></button>
                </form>

            </motion.div>

        </ContactStyled>
    )
}

const ContactStyled = styled.section`
    .layout {
        padding-top: 2rem;
        
        form {
            padding-top: 1rem;
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
            align-items: center;
        }

        input, textarea {
            width: 50%;
            padding: 1rem;
            border-radius: 0.5rem;
            background: transparent;
            border: 2px solid var(--primary-color);
            resize: none;
            color: var(--light-gray);
            font: inherit;
            ::placeholder {
                color: var(--gray);
            }

            @media screen and (max-width: 600px) {
                width: 90%;
            }

        }

        h2 {
            text-align: center;
            font-size: 2rem;
            line-height: 1;
            padding-bottom: 0.4rem;
            color: var(--light-gray);

            @media screen and (max-width: 600px) {
                font-size: 1.6rem;
            }
        }

        
    }

    .btn {
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
        text-align: center;
        font: inherit;
        
        
        &:hover {
            color: var(--primary-color);
            background: var(--dark-gray);
            border: 1px solid var(--primary-color);
            opacity: 0.6;
        }

        p {
            font-size: 1.2rem;
            text-align: center;
        }

        .send {
            vertical-align: middle;
            font-size: inherit;
            padding-bottom: 3px;
        }
    }

    @media screen and (max-width: 600px) {

    p {
        min-width: 6rem;
        font-size: 1rem;
    }

    }

    

`

export default Contact