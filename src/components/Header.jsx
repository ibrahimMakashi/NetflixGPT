import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";
import { toggleGPTPage } from "../utils/gptSlice";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const user = useSelector((store) => store.user);
  const isGpt = useSelector((store) => store.gpt.isGPTPage);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleGPTPage = () => {
    // const toggle = !isGpt
    dispatch(toggleGPTPage());
  };

  useEffect(() => {
    if (isGpt) {
      navigate("/browse/gpt");
    } else {
      navigate("/browse");
    }
  }, [isGpt, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="header-browse">
      <div className="browse-header flex">
        <div className="flex">
          <img
            src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt=""
          />
          <button onClick={handleGPTPage} className="gpt-btn">
            {!isGpt ? "GPT Ai search" : "Home page"}
          </button>
        </div>
        <div className="browse-header-right flex">
          <img src={user?.photoURL} alt="user" />
          <p>{user?.displayName}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
