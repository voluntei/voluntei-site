import React from 'react';
import Facebook from "../assets/fb.svg";

const SocialNetwork = (props) => {
    console.log('props', props)
    const svgWidth = '4rem';
    const svgRightMargin = '1.2rem';
    return (
        <div className={props.theme} style={{ marginTop: '2rem' }}>
            <Facebook style={{ width: svgWidth, marginRight: svgRightMargin }} />
        </div>
    );
};

export default SocialNetwork; 