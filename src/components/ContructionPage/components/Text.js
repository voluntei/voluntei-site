import React from 'react';
import SocialNetwork from '../../SocialNetwork';

const Text = () => {
    return (
        <div style={{ flexBasis: '50%', fontSize: '2.5rem' }}>
            <p>Opa! Que legal você por aqui!</p>
            <p>Estamos trabalhando para te proporcionar melhor experiência.</p>
            <p>Enquanto fazemos isso, você pode nos acompanhar nas redes sociais e ficar por dentro de tudo.</p>
            <SocialNetwork />
        </div>
    );
};

export default Text; 