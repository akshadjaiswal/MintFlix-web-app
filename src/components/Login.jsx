import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidata, checkValidataSignUp } from "../utils/validate";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
 const handleButtonClick = () => {
  // Pass all three values for validation when it's the Sign Up form
  if (!isSignIn) {
    const checkMessage = checkValidataSignUp(
      email.current.value,
      password.current.value,
      name.current.value,
    );
    setErrMessage(checkMessage);
  }
  // Pass only email and password for the Sign In form
  else {
    const checkMessage = checkValidata(
      email.current.value,
      password.current.value
    );
    setErrMessage(checkMessage);
  }
};
  const togleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className=" w-3/12 absolute p-12 bg-black/70  my-36 mx-auto right-0 left-0 text-white text-c rounded-lg"
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="p-4 my-4 w-full bg-gray-800 "
            />
          )}
          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-4 my-4 w-full bg-gray-800 "
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-4 my-4 w-full bg-gray-800 "
          />
          <p className="text-red-500">{errMessage}</p>
          <button
            className="p-4 my-4 cursor-pointer bg-red-700 w-full  rounded-lg"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="py-4 text-center cursor-pointer"
            onClick={togleSignInForm}
          >
            {isSignIn
              ? "New to MintFlix? SignUp"
              : "Already have and account? Sign In"}
          </p>
          <p></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
