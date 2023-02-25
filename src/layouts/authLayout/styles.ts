import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(115.67deg,
    ${(props) => props.theme.light.backgrounds.blue}
    7.14%,
    ${(props) => props.theme.light.backgrounds.pink}
    99.42%
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;
