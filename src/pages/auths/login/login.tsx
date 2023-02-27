import * as Styled from './styles';
import {Form} from './form';
import {instance as axios} from '~/api';


export const Login = () => {
  const handleSubmit = (data: any) => {
    // TODO test request
    axios.post('/');
  };

  return (
    <Styled.Wrapper>
      <Styled.Title>Login</Styled.Title>
      <Form handleSubmitForm={handleSubmit}/>
    </Styled.Wrapper>
  );
};
