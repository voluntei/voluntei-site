import React, { useEffect } from 'react';
import SocialNetwork from '../../SocialNetwork';
import Computador from "../../../assets/notebook.svg";

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
        console.log(targetElement, targetElement[0].style);
    }


    return (
        <>
            <div className={'targetHeight'} style={{ fontSize: '2.9rem', padding: '3rem 0', marginTop: '-15rem' }}>
                <Computador style={{ float: 'right', shapeOutside: polygon, marginRight: '-30rem' }} />
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