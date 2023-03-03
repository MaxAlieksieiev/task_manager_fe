import {Button as AntButton} from 'antd';
import styled from 'styled-components';

export const Button = styled(AntButton)`
  &.ant-btn {
    width: 100%;
    height: 52px;
    background: ${(props) => props.theme.light.backgrounds.purple};
    border-radius: 10px;
    font-weight: 500;
    font-size: 18px;

    color: ${(props) => props.theme.light.colors.textWhite};
    font-family: 'Montserrat', sans-serif;
  }
  &.ant-btn:hover{
    background: ${(props) => props.theme.light.backgrounds.purple};
  }
`;
