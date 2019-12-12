import React, { useEffect } from 'react';
import SocialNetwork from '../../SocialNetwork';
import Computador from "../../../assets/notebook.svg";
import { device } from '../../../utils/mediaQuery/devices';
import styled from 'styled-components';

const Text = () => {
    const polygon = 'polygon(53% 0%, 59% 0%, 144% 35%, 131% 85%, 85% 102%, 77% 100%, -6% 65%, 37% 35%, 51% 3%)';
    const hedlineText = { fontSize: '7rem', fontFamily: 'ProximaNovaBold', color: '#45446C', lineHeight: '0.9' };
    const text = { fontSize: '2.4rem', fontFamily: 'ProximaNovareg', color: '#707070', lineHeight: '1.21' };
    const hightClassName = 'hightElement';
    const targetHeight = 'targetHeight';



    useEffect(() => {
        recalculateHight();
        window.addEventListener('resize', recalculateHight, true);
    }, []);

    const recalculateHight = () => {
        var x = document.getElementsByClassName(hightClassName);
        var targetElement = document.getElementsByClassName(targetHeight);

        if (!x || !targetElement) return;
        let hightVal = 0;
        for (let index = 0; index < x.length; index++) {
            const element = x[index];
            hightVal += element.offsetHeight;
        }

        targetElement[0].style.height = hightVal + 'px';
    }

    const CompWrapper = styled.div`
    float: right;
    shape-outside: ${polygon};
    
    display:none;

  @media ${device.tablet} {
    display:block;
    margin-right: -60rem
  }

  @media ${device.laptop} {
    margin-right: -30rem
  }
  
  
  @media ${device.tablet} and (max-height: 375px) {
    display:none;
  }
`;
    return (
        <>
            <div className={'targetHeight'} style={{ fontSize: '2.9rem', padding: '3rem 0', marginTop: '-15rem' }}>
                <CompWrapper>
                    <Computador style={{ width: '100%', height: 'auto' }} />
                </CompWrapper>
                <p className={hightClassName} style={{ ...hedlineText, marginBottom: '2.4rem' }}> Opa! </p>
                <p className={hightClassName} style={{ ...hedlineText, marginBottom: '3.4rem' }}>Que legal você por aqui! </p>
                <p className={hightClassName} style={text}>Estamos trabalhando para te proporcionar melhor experiência.</p>
                <p className={hightClassName} style={text}>Enquanto fazemos isso, você pode nos acompanhar nas redes sociais e ficar <span style={{ ...text, fontFamily: 'ProximaNovaBold' }}>por dentro de tudo.</span></p>
                <SocialNetwork theme={hightClassName} />
            </div>
        </>

    );
};

export default Text; 