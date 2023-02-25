import {FC} from 'react';
import {Outlet} from 'react-router-dom';

import * as Styled from './styles';

export const AuthLayout: FC = () => {
  return (
    <Styled.Wrapper>
      <Outlet/>
    </Styled.Wrapper>
  );
};
