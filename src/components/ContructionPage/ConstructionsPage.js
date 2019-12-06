import React from 'react';
import Text from './components/Text'
import FaixaConstrucao from "../../assets/FaixaConstrucao.svg";
import Ceu from "../../assets/ceu.svg";
import BgAmarelo from "../../assets/bgAmarelo.svg";
import Computador from "../../assets/notebook.svg";

const ConstructionPage = () => {
  return (
    <>
      <FaixaConstrucao style={{ width: '36rem', position: 'fixed', top: '0', left: '0' }} />
      <Ceu style={{ width: '75rem', position: 'fixed', top: '0', right: '0' }} />
      <BgAmarelo style={{ position: 'fixed', bottom: '0', left: '0' }} />
      <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <Text />
      </div>
      <Computador style={{ position: 'absolute', top: '50%', right: '-20%', transform: 'translateY(-50%)' }} />
    </>
  );
};

export default ConstructionPage; 