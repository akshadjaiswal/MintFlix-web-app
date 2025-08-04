import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg"
          alt="logo"
        ></img>
      </div>
      <div>

      <form className=" w-3/12 absolute p-12 bg-black  my-36 mx-auto right-0 left-0 text-white text-c ">
      <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input type="text" placeholder="Email Address" className="py-2 m-2 w-full " />
        <input type="password" placeholder="Password" className="py-2 m-2 w-full " />
        <button className="py-2 m-2 bg-red-700 w-full ">Sign in</button>
      </form>
      </div>
    </div>
  );
};

export default Login;
