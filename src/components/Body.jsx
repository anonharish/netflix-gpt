import React, { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./../utils/firebase";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../store/userSlice";
import Login from "./Login";
import Browse from "./Browse";

const Body = () => {
  const dispatch = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    console.log("inside body");
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user, "inside onAuthStateChanged");
        const { photoURL, uid, displayName } = user;
        dispatch(addUser({ photoURL, uid, displayName }));
        // ...
      } else {
        dispatch(removeUser());
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
