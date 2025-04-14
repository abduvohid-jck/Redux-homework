import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../redux/authSlice";

function LogIn() {
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let navigate = useNavigate();
  const dispatch = useDispatch();

  function Login() {
    axios
      .post("https://api.ashyo.fullstackdev.uz/auth/login", {
        email,
        password,
      })
      .then((res) => {
        dispatch(setToken(res.data.accessToken));
        navigate("/dashboard");
      });
  }
  return (
    <div className="pt-[184px] bg-[#FCFAFA] h-[100vh] relative">
      <h1 className="text-center font-kumbhsans font-[600] mb-[53px] text-[36px] text-[#4F4F4F]">
        Welcome, Log into you account
      </h1>
      <div className="w-[512px] mx-auto text-center bg-[#FFFFFF] pt-[72px] pb-[39px]">
        <p className="font-inter font-[500] text-[16px] text-[#667085]">
          It is our great pleasure to have <br /> you on board!{" "}
        </p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="block mx-auto my-[14px] w-[248px] p-[13px] rounded-[4px] border-[#A7A7A7] outline-none font-kumbhsans font-[500] text-[14px] border-[0.5px]"
          placeholder="Enter your Email"
          type="text"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="block mx-auto my-[14px] w-[248px] p-[13px] rounded-[4px] border-[#A7A7A7] outline-none font-kumbhsans font-[500] text-[14px] border-[0.5px]"
          placeholder="Enter Password"
          type="password"
        />
        <Link
          onClick={Login}
          className="mb-[14px] mx-auto w-[248px] justify-center flex items-center h-[42px] bg-[#2D88D4] border-[0.5px] rounded-[4px] font-kumbhsans font-[700] text-[14px] text-[#FFFFFF]"
        >
          Login
        </Link>
        <Link
          className="font-inter font-[700] text-[12px] text-[#2D88D4]"
          to="/signup"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default LogIn;
