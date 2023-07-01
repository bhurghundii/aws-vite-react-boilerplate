import { withAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { useState } from "react";

function forgotPasswordSubmit(
  username: string,
  code: string,
  new_password: string
) {
  if (username && code && new_password) {
    Auth.forgotPasswordSubmit(username, code, new_password)
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  } else {
    alert("Something is wrong with the data you entered, try again");
  }
}

const ForgotPassword = () => {
  const initialState = {
    username: "",
    code: "",
    new_password: "",
  };
  const [formState, setFormState] = useState<any>(initialState);

  function setInput(key: any, value: any) {
    setFormState({ ...formState, [key]: value });
  }

  function handleCodeChange(event: { target: { value: any } }) {
    setInput("code", event.target.value);
  }

  function handleUserNameChange(event: { target: { value: any } }) {
    setInput("username", event.target.value);
  }

  function handlePasswordChange(event: { target: { value: any } }) {
    setInput("new_password", event.target.value);
  }

  return (
    <div>
      <div>
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
          <p className="text-sm text-gray-500 font-bold">
            I sent you a code via email to make sure this happens safely
          </p>

          <div className="relative place-items-center">
            <div className="mt-2">
              <p className="text-sm text-gray-500">What is your username</p>
              <div>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    onChange={handleUserNameChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500">What is your code</p>
                <div>
                  <div className="relative mt-2 rounded-md shadow-sm">
                    <input
                      type="text"
                      name="price"
                      id="price"
                      onChange={handleCodeChange}
                      className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    What is your new password
                  </p>
                  <div>
                    <div className="relative mt-2 rounded-md shadow-sm">
                      <input
                        type="text"
                        name="price"
                        id="price"
                        onChange={handlePasswordChange}
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="mx-20 my-5">
                  <button
                    className=" bg-red-500 text-white px-4 py-2 rounded-lg flex shadow-lg"
                    onClick={() =>
                      forgotPasswordSubmit(
                        formState.username,
                        formState.code,
                        formState.new_password
                      )
                    }
                  >
                    <span className="mr-3 text-"> Set a new password </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default withAuthenticator(ForgotPassword);
