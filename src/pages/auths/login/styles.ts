import styled from 'styled-components';
import {Link as RouterLink} from 'react-router-dom';

export const Wrapper = styled.div`
  z-index:2;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 32px;
  text-align: center;
  margin-bottom: 32px;
`;

export const Form = styled.div`

`;

export const Row = styled.div`
  margin-bottom: 24px;
`;

export const Button = styled.div`

`;

export const Link = styled(RouterLink)`
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.light.colors.mainText};
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const MiniRow = styled.div`
  margin: 16px 0;
  text-align: center;
`;

export const SocialLinks = styled.div`
  width: 128px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
