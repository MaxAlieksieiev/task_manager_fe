import {FC} from 'react';
import {Controller, Control} from 'react-hook-form';
import {TypeOfInput} from '../../../core';
import * as Styled from './styled';

type FormTextInputProps = {
  name: string;
  label: string;
  error?: string;
  control: Control<any, any>;
  isBordered?: boolean;
  type: TypeOfInput;
}

export const FormTextInput: FC<FormTextInputProps> = ({
    name, label, error, control, isBordered, type,
  }) => {
    // TODO create one component
    // const InputComponent = useMemo<ReactElement>(() =>{
    //   return type === TypeOfInput.Password ?
    //     <Styled.FormPassword/> : <Styled.FormInput />;
    // }, [type]);

    return (
      <Controller
        name={name}
        control={control}
        render={
          ({field}) => (
            <Styled.Wrapper>
            {label && <Styled.Label>{label}</Styled.Label>}
            {type === TypeOfInput.Text && <Styled.FormInput
              bordered={isBordered}
              value={field.value}
              onChange={field.onChange}
              status={error && 'error'}
            />}
            {type === TypeOfInput.Password && <Styled.FormPassword
              bordered={isBordered}
              value={field.value}
              onChange={field.onChange}
              status={error && 'error'}
            />}
            {error && <Styled.Error>{error}</Styled.Error>}
            </Styled.Wrapper>
          )

        }
      />
    );
};
