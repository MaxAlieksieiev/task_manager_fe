import * as Styled from './styles';
import {Form} from './form';
import {instance as axios} from '@api/index';


export const Login = () => {
  const handleSubmit = (data: any) => {
    // TODO test request
    axios.post('/');
  };

  return (
    <Styled.Wrapper>
      <Styled.Title>Welcome to Tropic</Styled.Title>
      <Form handleSubmitForm={handleSubmit}/>
    </Styled.Wrapper>
  );
};
