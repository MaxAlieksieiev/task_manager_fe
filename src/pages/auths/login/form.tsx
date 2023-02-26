import * as Styled from './styles';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {initialData, LoginFormT, schema} from './data';
import {Button, FormTextInput} from '../../../components';
import {FC} from 'react';
import {TypeOfInput} from '../../../core';

type FormProps = {
  handleSubmitForm: (data: LoginFormT) => void;
}

export const Form: FC<FormProps> = ({handleSubmitForm}) => {
  const form = useForm<LoginFormT>({
    defaultValues: initialData,
    resolver: yupResolver(schema),
  });

  const {handleSubmit, formState: {errors}, control} = form;
  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Styled.Form>
        <Styled.Row>
          <FormTextInput
            name="email"
            control={control}
            isBordered
            label="Email"
            error={errors['email']?.message}
            type={TypeOfInput.Text}
          />
        </Styled.Row>
        <Styled.Row>
          <FormTextInput
            name="password"
            control={control}
            isBordered
            label="Password"
            error={errors['password']?.message}
            type={TypeOfInput.Password}
          />
        </Styled.Row>
        <Styled.Links>
          <Styled.Link to="/auth/register">
            If you don't have accout
          </Styled.Link>
          <Styled.Link to="/auth/forgot-password">
            Forgot password?
          </Styled.Link>
        </Styled.Links>
        <Styled.Button>
          <Button
            title="Login"
            size="large"
            typeBy="submit"
            type="primary"
          />
        </Styled.Button>
      </Styled.Form>
    </form>
  );
};
