import { FC, ReactElement } from "react";
import { Outlet } from "react-router-dom";

import * as Styled from './styles';

type AuthLayoutProps = {
  children: ReactElement,
}

export const AuthLayout: FC = () => {
  return (
    <Styled.Wrapper>
      <div>AuthLayout</div>
      <Outlet/>
    </Styled.Wrapper>
  )
}