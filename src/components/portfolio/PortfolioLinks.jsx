import React from 'react';
import styled from 'styled-components';
import GithubIcon from '@material-ui/icons/GitHub';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import BackupOutlinedIcon from '@material-ui/icons/BackupOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
const PortfolioLinks = ({ github, githubLink, video, videoLink, liveDemo, liveDemoLink, lock }) => {
    return (
        <PortfolioLinksStyled>
            <div className="icons-container">
                {github &&
                    <a href={githubLink} target="blank" className="icon i-github"><GithubIcon /></a>
                }
                {liveDemo &&
                    <a href={liveDemoLink} target="blank" className="icon i-live"><BackupOutlinedIcon /></a>
                }
                {video &&
                    <a href={videoLink} target="blank" className="icon i-video"><PlayCircleFilledWhiteOutlinedIcon /></a>
                }
                {lock &&
                    <div className="icon i-lock"><LockOutlinedIcon /></div>
                }
            </div>
        </PortfolioLinksStyled>
    )
}

const PortfolioLinksStyled = styled.div`
    .icons-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        .icon {
            
            color: var(--primary-color);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 2px;
            margin: 8px;
            transition: all .6s ease-in-out;

            &:hover {
                color: var(--light-gray);
            }
        }

        
        
    }

    @media screen and (max-width: 1024px) {
        
    }


`

export default PortfolioLinks