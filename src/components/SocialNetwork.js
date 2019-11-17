import React from 'react';
import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import Twitter from "../assets/twitter.svg";
import Discord from "../assets/discord.svg";

const SocialNetwork = () => {
    const svgWidth = '4rem';
    const svgRightMargin = '1.2rem';
    return (
        <div style={{ marginTop: '2rem' }}>
            <Facebook style={{ width: svgWidth, marginRight: svgRightMargin }} />
            <Instagram style={{ width: svgWidth, marginRight: svgRightMargin }} />
            <Twitter style={{ width: svgWidth, marginRight: svgRightMargin }} />
            <Discord style={{ width: svgWidth }} />
        </div>
    );
};

export default SocialNetwork; 