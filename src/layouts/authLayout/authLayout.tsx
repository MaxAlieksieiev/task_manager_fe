import {FC} from 'react';
import {Logo} from '@assets/index';
import {Outlet} from 'react-router-dom';

import * as Styled from './styles';

export const AuthLayout: FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.LeftSide>
        <Styled.Logo>
          <img src={Logo}/>
        </Styled.Logo>
      </Styled.LeftSide>
      <Styled.RightSide>
        <Styled.Form>
          <Outlet/>
        </Styled.Form>
      </Styled.RightSide>
    </Styled.Wrapper>
  );
};
