import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/userSlice";
import logo from "../assets/Netflix_Logo_PMS.png";
import netflixDefaultAvatar from "../assets/Netflix-avatar.png";

const Header = () => {
  const user = useSelector((state) => state);
  console.log(user, "inside header state");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    console.log("signedOut");
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
        console.log("signOut successfully");
      })
      .catch((error) => {
        console.log(error, "error in signOut call");
        // An error happened.
      });
  };
  return (
    <>
      <div className="w-full flex justify-between absolute px-8 py-2 bg-gradient-to-b from-black z-10">
        <div>
          <img src={logo} alt="logo" className="w-40" />
        </div>
        {user && (
          <div className="flex">
            <img
              src={user?.photoURL ? user.photoURL : netflixDefaultAvatar}
              className="w-10 h-10 mr-2"
              alt="profile"
            />
            <p className="text-white mr-1">{user?.displayName} </p>
            <p className="text-white cursor-pointer" onClick={handleSignOut}>
              (signOut)
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
