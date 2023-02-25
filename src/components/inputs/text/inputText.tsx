import {FC, useState} from 'react';
import * as Styled from './styled';

type InputTextProps = {
  isBordered: boolean;
  label?: string;
  value: string;
}

export const InputText: FC<InputTextProps> = ({
    isBordered, label, value,
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
          value={state}
          onChange={handleInput}
        />
      </Styled.Wrapper>
    );
};
