import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import { AuthLayout } from "../layouts/authLayout";
import { Login } from "../pages/auths/login";
import { ROUTES } from "./routes";

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.main}>
          <Route element={<AuthLayout/>} path={ROUTES.auth.main}>
            <Route element={<Login/>} path={ROUTES.auth.login} index/>
          </Route>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}