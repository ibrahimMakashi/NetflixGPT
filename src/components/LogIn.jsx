import React, { useRef, useState } from "react";
import { confermation } from "../utils/confermation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const LogIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [validationError, setValidationError] = useState({});
  const [fireError, setFireError] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const userName = useRef();
  const email = useRef();
  const password = useRef();

  const handleLog = () => {
    setLoading(true);
    const valid = confermation(
      email.current.value,
      password.current.value,
      !isSignIn && userName.current ? userName.current.value : null
    );

    if (Object.keys(valid).length == 0) {
      setValidationError({});

      if (!isSignIn) {
        console.log("sign up success");
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;

            updateProfile(user, {
              displayName: userName.current.value,
              photoURL:
                "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg",
            })
              .then(() => {
                // Profile updated!
                const { uid, displayName, email, photoURL } = user;
                dispatch(
                  addUser({
                    uid: uid,
                    displayName: displayName,
                    email: email,
                    photoURL: photoURL,
                  })
                );

                setLoading(false);

                // ...
              })
              .catch((error) => {
                // An error occurred
                const errorMessage = error.message;
                setFireError(errorMessage);
                // ...
              });
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setFireError(errorMessage);
            // ..
          });
      } else {
        console.log("sign in success");
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
           
            const { uid, displayName, email, photoURL } = user;
            dispatch(
              addUser({
                uid: uid,
                displayName: displayName,
                email: email,
                photoURL: photoURL,
              })
            );
            setLoading(false);

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setFireError(errorMessage);
          });
      }
    } else {
      setValidationError({ ...valid });
    }
  };



  const toggleIsSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  const style = {
    border: "1px solid red",
  };

  return (
    <div className="log-in">
      <div className="container log-in-container">
        <div className="log-in-header">
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt=""
          />
        </div>
        <form className="log-in-form" onSubmit={(e) => e.preventDefault()}>
          <h1>{isSignIn ? "Sign In" : "Sign Up"}</h1>
          {!isSignIn && (
            <input
              style={validationError?.userName && style}
              ref={userName}
              type="text"
              placeholder="Full Name"
            />
          )}
          {!isSignIn && validationError.userName && (
            <p>{validationError.userName}</p>
          )}
          <input
            style={validationError?.email && style}
            ref={email}
            type="text"
            placeholder="Email"
          />
          {validationError?.email && <p>{validationError.email}</p>}
          <input
            style={validationError?.password && style}
            ref={password}
            type="password"
            placeholder="Password"
          />
          {validationError?.password && <p>{validationError.password}</p>}
          {fireError && <p>{fireError}</p>}
          <button onClick={handleLog}>
            {loading ? "loading.." : isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p id="log-on-para" onClick={toggleIsSignIn}>
            {isSignIn
              ? "New to Netflix?Sign up now."
              : "Already a user?Sign in now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
