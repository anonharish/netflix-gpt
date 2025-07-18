import {useEffect} from "react";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { addUser } from "../store/userSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { removeUser } from "../store/userSlice";
import logo from "../assets/Netflix_Logo_PMS.png";
import netflixDefaultAvatar from "../assets/Netflix-avatar.png";

const Header = () => {
  const user = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

   useEffect(() => {
    const unsubscribe =onAuthStateChanged(auth, (user) => {
        if (user) {
          const { photoURL, uid, displayName } = user;
          dispatch(addUser({ photoURL, uid, displayName }));
          navigate("/browse")
          // ...
        } else {
          dispatch(removeUser());
          navigate("/")
          // User is signed out
          // ...
        }
      });
    return () => {
      unsubscribe();
    }
    }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
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
