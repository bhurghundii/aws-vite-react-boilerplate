import { withAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";

async function changeEmailAddress(user: any, email: string, code: string) {
  Auth.verifyCurrentUserAttributeSubmit("email", code)
    .then(() => {
      Auth.updateUserAttributes(user, {
        email: email,
      });
    })
    .catch((e) => {
      console.log("failed with error", e);
    });
}

const UserManagement = () => {
  const [user, setUser] = useState(null);

  const [initialState] = useState<any>({
    email: "",
    code: "",
  });
  const [formState, setFormState] = useState<any>(initialState);

  function setInput(key: any, value: any) {
    setFormState({ ...formState, [key]: value });
  }

  function handleEmailChange(event: { target: { value: any } }) {
    setInput("email", event.target.value);
  }

  function handleCodeChange(event: { target: { value: any } }) {
    setInput("code", event.target.value);
  }

  useEffect(() => {
    Auth.currentAuthenticatedUser().then((currentUser) => {
      setUser(currentUser);
    });
  }, []);

  return (
    <div>
      <div>
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
          <div className="relative place-items-center">
            <p className="text-sm text-gray-500 font-bold">
              I sent you a code via email to make sure this happens safely
            </p>

            <div className="mt-2">
              <p className="text-sm text-gray-500 font-bold">
                What is your new email
              </p>
              <div>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <input
                    type="text"
                    name="price"
                    id="price"
                    onChange={handleEmailChange}
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <p className="text-sm text-gray-500 font-bold">
                What is your new code
              </p>
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

              <div className="mx-20 my-5">
                <button
                  className=" bg-red-500 text-white px-4 py-2 rounded-lg flex shadow-lg"
                  onClick={() =>
                    changeEmailAddress(user, formState.email, formState.code)
                  }
                >
                  <span className="mr-3 font-bold"> Set a new email </span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default withAuthenticator(UserManagement);
