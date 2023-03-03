import * as Styled from './styles';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {initialData, LoginFormT, schema} from './data';
import {Button, FormTextInput} from '~/components';
import {ReactComponent as Google} from '~/assets/icons/Google.svg';
import {ReactComponent as LinkedIn} from '~/assets/icons/Linkedin.svg';
import {ReactComponent as Facebook} from '~/assets/icons/Facebook.svg';
import {FC} from 'react';
import {TypeOfInput} from '~/core';

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
            error={errors['email']?.message}
            type={TypeOfInput.Text}
          />
        </Styled.Row>
        <Styled.Row>
          <FormTextInput
            name="password"
            control={control}
            isBordered
            error={errors['password']?.message}
            type={TypeOfInput.Password}
          />
        </Styled.Row>
        <Styled.Links>
          <Styled.Link to="/auth/forgot-password">
            Forgot password?
          </Styled.Link>
          <Styled.Link to="/auth/register">
            Sign up for an account
          </Styled.Link>
        </Styled.Links>
        <Styled.Button>
          <Button
            title="Log in"
            size="large"
            typeBy="submit"
            type="primary"
          />
        </Styled.Button>
        <Styled.MiniRow>
          or
        </Styled.MiniRow>
        <Styled.SocialLinks>
          <Google />
          <Facebook />
          <LinkedIn />
        </Styled.SocialLinks>
      </Styled.Form>
    </form>
  );
};
