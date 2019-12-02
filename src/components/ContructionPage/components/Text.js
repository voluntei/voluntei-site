import React from 'react';
import SocialNetwork from '../../SocialNetwork';

const Text = () => {
    return (
        <div style={{ fontSize: '2.9rem' }}>
            <p style={{ fontSize: '7rem', fontFamily: 'ProximaNovaBold' }}> Opa! </p>
            <p style={{ fontSize: '7rem', fontFamily: 'ProximaNovaBold' }}>Que legal você por aqui! </p>
            <p>Estamos trabalhando para te proporcionar melhor experiência.</p>
            <p>Enquanto fazemos isso, você pode nos acompanhar nas redes sociais e ficar por dentro de tudo.</p>
            <SocialNetwork />
        </div>
    );
};

export default Text; 