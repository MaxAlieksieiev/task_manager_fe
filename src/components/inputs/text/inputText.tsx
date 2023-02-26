import {FC, useState} from 'react';
import * as Styled from './styled';

type InputTextProps = {
  isBordered: boolean;
  label?: string;
  value?: string;
  field?: any;
}

export const InputText: FC<InputTextProps> = ({
    isBordered, label, value, field,
  }) => {
    const [state, setState] = useState<string>(value || '');

    const handleInput = (e: any) => {
      setState(e.target.value);
    };

    return (
      <Styled.Wrapper>
        {label && <Styled.Label>{label}</Styled.Label>}
        <Styled.Input
          bordered={isBordered}
          value={field ? field.value : state}
          onChange={field ? field.onChange : handleInput}
        />
      </Styled.Wrapper>
    );
};
