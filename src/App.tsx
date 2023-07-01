//App.js
import { Authenticator } from "@aws-amplify/ui-react";

import { Amplify, Auth } from "aws-amplify";
import awsmobile from "./aws-exports";

import "./App.css";
import AppRoutes from "./AppRoutes";
import { useState, useEffect } from "react";
import LoginPropsType from "./components/aws-auth/LoginPropsType";
import { getUserName } from "./components/aws-auth/getUserName";

Amplify.configure(awsmobile);

function App() {
  const [loginProps, setLoginProps] = useState<LoginPropsType>({isLoggedIn: false, username: ""});

  useEffect(() => {
    Auth.currentUserInfo().then((result) => {
      setLoginProps({isLoggedIn: (result !== null), username: (getUserName(result))});
    });
  }, []);

  return (
    <Authenticator.Provider>
      <AppRoutes props={loginProps} setLoginProps={setLoginProps} />
    </Authenticator.Provider>
  );
}

export default App;
