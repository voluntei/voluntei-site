import React from 'react';
import Facebook from "../assets/fb.svg";

const SocialNetwork = () => {
    const svgWidth = '4rem';
    const svgRightMargin = '1.2rem';
    return (
        <div style={{ marginTop: '2rem' }}>
            <Facebook style={{ width: svgWidth, marginRight: svgRightMargin }} />
        </div>
    );
};

export default SocialNetwork; 