import { RequireAuth } from "./components/RequireAuth";
import { Login } from "./pages/Login";
import Home from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Layout from "./pages/Layout";
import AboutYou from "./pages/protected/AboutYou";
import ForgotPassword from "./pages/protected/ForgotPassword";
import Protected from "./pages/protected/Protected";
import UserManagement from "./pages/protected/UserManagement";
import LoginProps from "./components/aws-auth/LoginPropsType";

function AppRoutes({
  props,
  setLoginProps,
}: {
  props: LoginProps;
  setLoginProps: any;
}) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout props={props} />}>
          <Route
            index
            element={
              props.isLoggedIn ? (
                <RequireAuth>
                  <Protected username={props.username} />
                </RequireAuth>
              ) : (
                <Home />
              )
            }
          />

          <Route
            path="/forgotpassword"
            element={
              <RequireAuth>
                <ForgotPassword />
              </RequireAuth>
            }
          />

          <Route
            path="/usermanagement"
            element={
              <RequireAuth>
                <UserManagement />
              </RequireAuth>
            }
          />

          <Route
            path="/aboutyou"
            element={
              <RequireAuth>
                <AboutYou setLoginProps={setLoginProps} />
              </RequireAuth>
            }
          />

          <Route
            path="/login"
            element={<Login setLoginProps={setLoginProps} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
