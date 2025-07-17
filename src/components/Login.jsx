import React, { useState,useRef } from "react";
import { validateLogInForm,validateSignUpForm } from "../utils/validate";
import netflixBg from "../assets/netflix_bg.jpg";
import Header from "./Header";

const Login = () => {
  const [isSignInform, setIsSignInform] = useState(false);
  const [error, setError] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignIn = () => {
    setIsSignInform(!isSignInform);
  };

  const handleFormSubmit = () => {
    const _email = email.current.value;
    const _name = name.current && name.current.value;
    const _pwd = password.current.value;
    const isFormValid = isSignInform ?  validateLogInForm(_email,_pwd) : validateSignUpForm(_name,_email,_pwd);
    setError(isFormValid);
    console.log(isFormValid,"inside the submit")
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={netflixBg} alt="Netflix_background_image" />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="max-w-[25rem] absolute py-16 px-12 my-32 bg-black text-white left-0 right-0 mx-auto bg-opacity-80 rounded">
        <h1 className="mb-14 text-3xl font-semibold">
        {!isSignInform ? "Sign Up" : "Sign In"}
        </h1>
        {!isSignInform && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="w-full mb-7 px-4 py-2 rounded bg-gray-600"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or Mobile Number"
          className="w-full mb-7 px-4 py-2 rounded bg-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full mb-7 px-4 py-2 rounded bg-gray-600"
        />
        {error && <p className="mb-2 text-red-500 font-bold">{error}</p>}
        <button type="submit" className="w-full bg-red-700 py-2 mb-7 rounded" onClick={handleFormSubmit}>
         {isSignInform ? "Sign In":"Sign Up"} 
        </button>
        {isSignInform ? (
          <p>
            New to Netflix?{" "}
            <span className="font-bold cursor-pointer" onClick={toggleSignIn}>
              Sign up now
            </span>
            .
          </p>
        ) : (
          <p>
            Already have account?{" "}
            <span className="font-bold cursor-pointer" onClick={toggleSignIn}>
              Sign In now
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
