import React, { useState } from "react";
import netflixBg from "../assets/netflix_bg.jpg";
import Header from "./Header";

const Login = () => {
  const [isSignInform,setIsSignInform] = useState(false);

  const toggleSignIn = () =>{
    setIsSignInform(!isSignInform);
  }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={netflixBg} alt="Netflix_background_image" />
      </div>
      <form className="max-w-[25rem] absolute py-16 px-12 my-32 bg-black text-white left-0 right-0 mx-auto bg-opacity-80 rounded">
        <h1 className="mb-14 text-3xl font-semibold">{!isSignInform ? "Sign In" : "Sign Up"}</h1>
        {!isSignInform && <input
          type="text"
          placeholder="Name"
          className="w-full mb-7 px-4 py-2 rounded bg-gray-600"
        />}
        <input
          type="text"
          placeholder="Email or Mobile Number"
          className="w-full mb-7 px-4 py-2 rounded bg-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-7 px-4 py-2 rounded bg-gray-600"
        />
        <button type="submit" className="w-full bg-red-700 py-2 mb-7 rounded">
          Sign In
        </button>
        {!isSignInform ? <p>
          New to Netflix? <span className="font-bold cursor-pointer" onClick={toggleSignIn}>Sign up now</span>.
        </p> : <p>Already have account? <span className="font-bold cursor-pointer" onClick={toggleSignIn}>Sign In now</span></p>}
      </form>
    </div>
  );
};

export default Login;
