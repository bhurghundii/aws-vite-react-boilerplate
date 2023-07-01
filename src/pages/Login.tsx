import { useEffect } from "react";

import { Authenticator, useAuthenticator, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { useNavigate, useLocation } from "react-router";
import { Auth } from "aws-amplify";
import { getUserName } from "../components/aws-auth/getUserName";

export function Login({ setLoginProps }: { setLoginProps: any }) {
  const { route } = useAuthenticator((context: any) => [context.route]);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (route === "authenticated") {
      Auth.currentUserInfo().then((result) => {
        setLoginProps({isLoggedIn: (result !== null), username: (getUserName(result))});
      });
      navigate(from, { replace: true });
    }
  }, [route, navigate, from]);
  return (
    <View className="auth-wrapper">
      <Authenticator></Authenticator>
    </View>
  );
}
