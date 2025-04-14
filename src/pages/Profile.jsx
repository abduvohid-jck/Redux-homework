import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../redux/authSlice";

function Profile() {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  function Logout() {
    dispatch(removeToken());
    navigate("/");
  }
  return (
    <div>
      Profile
      <button
        onClick={Logout}
        className="rounded-[10px] p-[10px] bg-[#3a90ff] m-[10px] text-white"
      >
        Log out
      </button>
    </div>
  );
}

export default Profile;
