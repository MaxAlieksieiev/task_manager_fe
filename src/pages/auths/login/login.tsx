import {InputText, InputPassword, Button} from '../../../components';
import * as Styled from './styles';

export const Login = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>Login</Styled.Title>
      <Styled.Form>
        <Styled.Row>
          <InputText
            label="Email"
            isBordered
            value=""
          />
        </Styled.Row>
        <Styled.Row>
          <InputPassword
            label="Password"
            isBordered
            value=""
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
            onClick={() => console.log('login')}
            typeBy="submit"
            type="primary"
          />
        </Styled.Button>
      </Styled.Form>
    </Styled.Wrapper>
  );
};
