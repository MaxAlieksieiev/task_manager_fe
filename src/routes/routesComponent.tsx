import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import {AuthLayout} from '../layouts/authLayout';
import {Login, Registration, ForgotPassword} from '../pages/auths';
import {ROUTES} from './routes';

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.main}>
          <Route element={<AuthLayout/>} path={ROUTES.auth.main}>
            <Route element={<Login/>} path={ROUTES.auth.login}/>
            <Route element={<Registration/>} path={ROUTES.auth.register} />
            <Route
              element={<ForgotPassword/>}
              path={ROUTES.auth.forgotPassword}
            />
          </Route>
        </Route>
    </Routes>
    </BrowserRouter>
  );
};
