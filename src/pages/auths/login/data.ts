import * as Yup from 'yup';

export const initialData = {
  email: '',
  password: '',
};

export type LoginFormT = {
  email: string;
  password: string;
}

export const schema = Yup.object().shape({
  email: Yup.string()
    .email('Email is not valid.').required('Email is required.'),
  password: Yup.string()
    .min(3, 'Minimun 3 symbols')
    .max(20, 'Maximum 20 symbols')
    .required('Password is required'),
});
