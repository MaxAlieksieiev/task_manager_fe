import styled from 'styled-components';
import {Input as AntInput} from 'antd';

export const FormInput = styled(AntInput)`
  &.ant-input {
    height: 52px;
    border: 1px solid ${(props) => props.theme.light.colors.border};
    border-radius: 10px;
  }
  &.ant-input:focus {
    box-shadow: none;
  }
  &.ant-input-status-error {
    border-color: ${(props) => props.theme.light.colors.textError} !important;
  }
`;
export const FormPassword = styled(AntInput.Password)`
  &.ant-input-password {
    height: 52px;
    border: 1px solid ${(props) => props.theme.light.colors.border};;
    border-radius: 10px;
  }
  &.ant-input-password:focus,
  &.ant-input-password:hover {
    box-shadow: none !important;
    border: 1px solid ${(props) => props.theme.light.colors.border};;
  }
  &.ant-input-affix-wrapper-status-error.ant-input-affix-wrapper {
    border-color: ${(props) => props.theme.light.colors.textError} !important;
  }
  &.ant-input-affix-wrapper-status-error:hover .ant-input-affix-wrapper {
    border-color: ${(props) => props.theme.light.colors.textError} !important;
  }
`;
export const Wrapper = styled.div`
  position: relative;
`;

export const Label = styled.div`
  margin-bottom: 5px;
  font-weigth: 600;
`;

export const Error = styled.div`
  position: absolute;
  bottom: -16px;
  left: 0;
  font-size: 12px;
  color: ${(props) => props.theme.light.colors.textError};
`;
