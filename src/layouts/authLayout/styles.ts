import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.light.backgrounds.white};
  display: flex;
`;

export const LeftSide = styled.div`
  background: url('/images/Group.png') no-repeat 0 0;
  width: 100%;
  max-width: 688px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  margin-left: 169px;
`;

export const Form = styled.div`
  width: 500px;
  padding: 40px;
  margin-left: 164px;
  border-radius: 10px;
  border: 1px solid rgba(136, 76, 178, 0.42);
  box-sizing: border-box;
`;
