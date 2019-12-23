import React from 'react';
import Facebook from "../assets/fb.svg";
import Discord from "../assets/discord.svg";
import Twitter from "../assets/tw.svg";
import Linkedin from "../assets/in.svg";
import Instagram from "../assets/ig.svg";

const SocialNetwork = (props) => {
    const linkProps = {
        links: {
            Discord: 'https://www.discord.gg/UmfS2dJ',
            Facebook: 'https://www.facebook.com/voluntei/',
            Instagram: 'https://www.instagram.com/voluntei/',
            Twitter: 'https://twitter.com/voluntei/',
            Linkedin: 'https://www.linkedin.com/company/voluntei/',
        },
        style: {
            width: '5.7rem',
            marginRight: '1.2rem',
            height: 'auto',
        },
    }
    return (
        <div className={props.theme} style={{ marginTop: '2rem' }}>
            <a href={linkProps.links.Discord} target="_blank" rel="noopener noreferrer">
                <Discord style={linkProps.style} />
            </a>
            <a href={linkProps.links.Facebook} target="_blank" rel="noopener noreferrer">
                <Facebook style={linkProps.style} />
            </a>
            <a href={linkProps.links.Instagram} target="_blank" rel="noopener noreferrer">
                <Instagram style={linkProps.style} />
            </a>
            <a href={linkProps.links.Twitter} target="_blank" rel="noopener noreferrer">
                <Twitter style={linkProps.style} />
            </a>
            <a href={linkProps.links.Linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin style={linkProps.style} />
            </a>
        </div>
    );
};

export default SocialNetwork; 