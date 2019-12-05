import React from 'react';
import Text from './components/Text'
import FaixaConstrucao from "../../assets/FaixaConstrucao.svg";
import Ceu from "../../assets/ceu.svg";

const ConstructionPage = () => {
  return (
    <>
      <FaixaConstrucao style={{ width: '36rem', position: 'fixed', top: '0', left: '0' }} />
      <Ceu style={{ position: 'fixed', top: '0', right: '0' }} />
      <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        <Text />
      </div>
    </>
  );
};

export default ConstructionPage; 