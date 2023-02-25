import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    ${(props) => props.theme.light.backgrounds.blue}, 
    ${(props) => props.theme.light.backgrounds.pink}
  )
`;
