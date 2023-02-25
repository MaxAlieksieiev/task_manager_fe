import {FC} from 'react';
import * as Styled from './styled';

const SMALL = 'small';
const MIDDLE= 'middle';
const LARGE = 'large';

const DEFAULT_TYPE = 'button';
const FORM_TYPE = 'submit';

const PRIMARY_TYPE = 'primary';

type ButtonSize = typeof SMALL | typeof MIDDLE | typeof LARGE;
type ButtonType = typeof DEFAULT_TYPE | typeof FORM_TYPE;
type ButtonTypeByLib = typeof PRIMARY_TYPE;

type ButtonProps = {
  title: string;
  isLoading?: boolean;
  size: ButtonSize;
  isDisabled?:boolean;
  type: ButtonTypeByLib;
  typeBy: ButtonType;
  onClick: () => void;
}

export const Button: FC<ButtonProps> =
  ({
    title, isDisabled, isLoading, type, typeBy, onClick, size,
  }) => {
  return (
    <Styled.Button
      type={type}
      disabled={isDisabled}
      loading={isLoading}
      onClick={onClick}
      size={size}
      htmlType={typeBy}
    >
      {title}
    </Styled.Button>);
};
