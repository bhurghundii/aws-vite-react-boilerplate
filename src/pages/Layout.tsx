import { Outlet } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import LoginPropsType from "../components/aws-auth/LoginPropsType";

function Layout({props} : {props : LoginPropsType}) {
  return (
    <div>
      <main className="flex min-h-screen flex-col p-24">
        <div className="z-10 w-full max-w-5xl text-sm lg:flex">
          <div className="fixed left-0 top-0 w-full">
            <NavBar props={props} />
          </div>
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
