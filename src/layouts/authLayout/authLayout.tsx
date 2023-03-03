import {FC} from 'react';
import {ReactComponent as Logo} from '~/assets/icons/Logo.svg';
import {Outlet} from 'react-router-dom';

import * as Styled from './styles';

export const AuthLayout: FC = () => {
  return (
    <Styled.Wrapper>
      <Styled.LeftSide>
        <Styled.Logo>
          <Logo/>
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
