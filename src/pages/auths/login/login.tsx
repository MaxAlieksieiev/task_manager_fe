import * as Styled from './styles';
import {Form} from './form';


export const Login = () => {
  const handleSubmit = (data: any) => {
    console.log('data', data);
  };

  return (
    <Styled.Wrapper>
      <Styled.Title>Login</Styled.Title>
      <Form handleSubmitForm={handleSubmit}/>
    </Styled.Wrapper>
  );
};
