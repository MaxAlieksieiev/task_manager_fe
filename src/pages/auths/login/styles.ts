import styled from 'styled-components';
import {Link as RouterLink} from 'react-router-dom';

export const Wrapper = styled.div`
  width: 400px;
  background: #FFFFFF;
  box-shadow: 0px 4px 40px #8CA4D8;
  border-radius: 30px;
  padding: 20px 0;
`;

export const Title = styled.div`
  text-align: center;
  padding: 5px;
  font-weight: bold;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  margin-top: 20px;
`;

export const Row = styled.div`
  margin: 10px 0;
`;

export const Button = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const Link = styled(RouterLink)`
  font-size: 14px;
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;
`;
