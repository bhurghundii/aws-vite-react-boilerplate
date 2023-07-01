import { Auth } from "aws-amplify";

import { useAuthenticator, withAuthenticator } from "@aws-amplify/ui-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function forgotPassword(username: string, navigate: any) {
  // Send confirmation code to user's email
  Auth.forgotPassword(username)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

  navigate("/forgotpassword");
}

function changeEmailAddress(user: any, navigate: any) {
  // // Collect confirmation code and new password, then
  Auth.verifyUserAttribute(user, "email");

  navigate("/usermanagement");
}

function deleteUser() {
  // Delete the user
  Auth.deleteUser();
}

function AboutYou({ setLoginProps }: { setLoginProps: any }) {
  const { signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);

  function logOut() {
    setLoginProps({isLoggedIn: false, username: ""});
    signOut();
    navigate("/");
  }

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [email, setEmailAddress] = useState("");

  const [deleteFinal, setDeleteFinal] = useState(false);

  function finalchanceDelete() {
    // Delete the user
    setDeleteFinal(true);
  }

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((currentUser) => {
      setUser(currentUser);
    });

    Auth.currentUserInfo().then((attributes) => {
      setUserName(attributes.username);
      setEmailAddress(attributes.attributes.email);
    });
  }, []);

  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div className="py-2">
          <h1 className="text-lg font-bold"> Your Account Details </h1>

          <h1> Your username: {userName} </h1>

          <h1> Your email: {email} </h1>

          <div className="py-2">
            <h1 className="text-lg font-bold"> Change your details </h1>

            <h1> Got a new email?</h1>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => changeEmailAddress(user, navigate)}
            >
              {" "}
              Change it{" "}
            </button>
          </div>

          <div className="py-2">
            <p> Forgot your password? </p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => forgotPassword(userName, navigate)}
            >
              {" "}
              Click here{" "}
            </button>
          </div>

          <div className="py-2">
            <h1 className="text-lg font-bold"> Want to log out? </h1>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => logOut()}
            >
              <i className="fab fa-facebook-square text-lg leading-lg text-black opacity-75"></i>
              <span className="">Log Out</span>
            </button>
          </div>

          <div className="py-5">
            <h1 className="text-lg font-bold"> The danger zone</h1>
            <p>
              {" "}
              Had enough? Delete your account!{" "}
            </p>
            <button
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => finalchanceDelete()}
            >
              {" "}
              Delete your account{" "}
            </button>{" "}
            {deleteFinal ? (
              <div>
                <p> Are you sure? You can't go back on this. </p>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => deleteUser()}
                >
                  {" "}
                  Yes, delete my account{" "}
                </button>{" "}
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </div>
  );
}

export default withAuthenticator(AboutYou);
