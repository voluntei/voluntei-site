import React from 'react';
import SocialNetwork from './SocialNetwork';
import Button from '@material-ui/core/Button';

const ConstructionPage = () => {
    return (
    <>
        <p>Opa! Que legal você por aqui!</p>
        <p>Estamos trabalhando para te proporcionar melhor experiência.</p>
        <p>Enquanto fazemos isso, você pode nos acompanhar nas redes sociais e ficar por dentro de tudo.</p>
        <SocialNetwork />
        <Button variant="contained" color="primary">
            Hello World
      </Button>
    </>
  );
};

export default ConstructionPage; 