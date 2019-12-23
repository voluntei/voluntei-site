import React from 'react';
import Text from './components/Text'
import FaixaConstrucao from "../../assets/FaixaConstrucao.svg";
import Ceu from "../../assets/ceu.svg";
import BgAmarelo from "../../assets/bgAmarelo.svg";
import { device } from "../../utils/mediaQuery/devices"
import styled from 'styled-components';

const ConstructionPage = () => {
  const Faixa = styled.div`
  width: 36rem;
  height: auto;
  position: fixed;
  top: 0;
  left: 0;
  display:none;

  @media ${device.tablet} {
    display:block;
  }
  
  @media ${device.tablet} and (max-height: 375px) {
    display:none;
  }
`;
  return (
    <>
      <Faixa>
        <FaixaConstrucao style={{ width: '100%', height: 'auto', }} />
      </Faixa>
      <Ceu style={{ width: '75rem', height: 'auto', position: 'fixed', top: '0', right: '0' }} />
      <BgAmarelo style={{ width: '92rem', height: 'auto', position: 'fixed', bottom: '0', left: '0' }} />
      <div style={{ height: '100%', display: 'flex', alignItems: 'center', zIndex: '1' }}>
        <Text />
      </div>

    </>
  );
};

export default ConstructionPage; 