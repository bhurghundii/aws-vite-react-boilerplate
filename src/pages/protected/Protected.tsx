import { withAuthenticator } from "@aws-amplify/ui-react";

const Protected = ({username} : {username : String}) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center text-sm lg:flex">
        <div className="fixed left-0 top-0 w-full justify-center text-center my-40 mx-30">
          <h1 className="text-3xl font-bold">Hello {username}, you've logged in!</h1>
        </div>
      </div>
    </main>
  );
};

export default withAuthenticator(Protected);
