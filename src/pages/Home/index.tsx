import React, { useState } from 'react';
import * as S from './styled';

const Home = () => {
  const [background, setBackground] = useState<string>();
  const [color, setColor] = useState<string>();

  const toggle = () => {
    if (background && color) {
      setColor(undefined);
      setBackground(undefined);
      return;
    }

    setColor('black');
    setBackground('yellow');
  };

  return (
    <S.HomeWrapper>
      <S.CardCenter onClick={toggle} color={color} backgroundColor={background}>
        <h1>{process.env.TESTE}</h1>
      </S.CardCenter>
    </S.HomeWrapper>
  );
};

export default Home;
