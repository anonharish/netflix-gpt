import React, { useState, useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { validateLogInForm, validateSignUpForm } from "../utils/validate";
import { addUser } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { DEFAULT_PROFILE_URL } from "../utils/constants";
import netflixBg from "../assets/netflix_bg.jpg";
import Header from "./Header";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
    const message = isSignInform
      ? validateLogInForm(_email, _pwd)
      : validateSignUpForm(_name, _email, _pwd);
    setError(message);
    if (message) return;
    if (!isSignInform) {
      createUserWithEmailAndPassword(auth, _email, _pwd)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: _name,
            photoURL:DEFAULT_PROFILE_URL,
          })
            .then(() => {
              auth.currentUser.reload().then(() => {
                const { photoURL, uid, displayName } = auth.currentUser;
                dispatch(addUser({ photoURL, uid, displayName }));
              });
              
            })
            .catch((error) => {
              setError(error);
              console.log(error, "error in update profile");
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, _email, _pwd)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={netflixBg} alt="Netflix_background_image" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-[25rem] absolute py-16 px-12 my-32 bg-black text-white left-0 right-0 mx-auto bg-opacity-80 rounded"
      >
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
        <button
          type="submit"
          className="w-full bg-red-700 py-2 mb-7 rounded"
          onClick={handleFormSubmit}
        >
          {isSignInform ? "Sign In" : "Sign Up"}
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
