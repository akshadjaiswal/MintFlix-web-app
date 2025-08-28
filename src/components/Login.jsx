import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidata, checkValidataSignUp } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

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
        name.current.value
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

    if (errMessage) return;

    //sign in sign up
    if (!isSignIn) {
      //sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(auth,  email.current.value,
        password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user)
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };
  const togleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute inset-0">
        <img
          src="https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg"
          alt="logo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-center items-center min-h-screen relative">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 p-8 sm:p-10 bg-black/70 text-white rounded-lg shadow-lg"
        >
          <h1 className="font-bold text-2xl sm:text-3xl text-center py-2">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignIn && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="p-3 my-3 w-full bg-gray-800 rounded-md"
            />
          )}

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 my-3 w-full bg-gray-800 rounded-md"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 my-3 w-full bg-gray-800 rounded-md"
          />

          <p className="text-red-500 text-sm">{errMessage}</p>

          <button
            className="p-3 my-4 bg-red-700 w-full rounded-lg hover:bg-red-800 transition-colors"
            onClick={handleButtonClick}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="py-3 text-center cursor-pointer text-sm sm:text-base hover:underline"
            onClick={togleSignInForm}
          >
            {isSignIn
              ? "New to MintFlix? Sign Up"
              : "Already have an account? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
