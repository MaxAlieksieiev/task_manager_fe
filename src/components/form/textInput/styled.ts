import styled from 'styled-components';
import {Input as AntInput} from 'antd';

export const FormInput = styled(AntInput)``;
export const FormPassword = styled(AntInput.Password)``;
export const Wrapper = styled.div`
  position: relative;
`;

export const Label = styled.div`
  margin-bottom: 5px;
  font-weigth: 600;
`;

export const Error = styled.div`
  position: absolute;
  bottom: -20px;
  left: 0;
  font-size: 14px;
  color: red;
`;
