import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  let [fullname, setFullname] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let navigate = useNavigate();
  function Register() {
    axios
      .post("https://api.ashyo.fullstackdev.uz/auth/register", {
        fullname: fullname,
        password: password,
        email: email,
      })
      .then(() => {
        navigate("/");
      });
  }

  return (
    <div className="pt-[98px] bg-[#FCFAFA] h-[100vh] relative">
      <h1 className="font-kumbhsans font-[600] text-[36px] text-center text-[#4F4F4F] mb-[53px]">
        Welcome, Sign up
      </h1>
      <div className="w-[512px] mx-auto pt-[72px] pb-[100px] text-center bg-[#FFFFFF]">
        <p className="font-inter font-[500] text-[16px] text-[#667085] mb-[34px]">
          It is our great pleasure to have <br /> you on board!{" "}
        </p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="mx-auto block mb-[14px] w-[248px] h-[42px] p-[13px] border-[0.5px] border-[#A7A7A7] rounded-[4px] font-kumbhsans font-[500] text-[14px] outline-none"
          type="email"
          placeholder="Enter your Email"
        />
        <input
          onChange={(e) => setFullname(e.target.value)}
          className="block mx-auto mb-[14px] w-[248px] h-[42px] p-[13px] border-[0.5px] border-[#A7A7A7] rounded-[4px] font-kumbhsans font-[500] text-[14px] outline-none"
          type="text"
          placeholder="Create your Login"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="block mx-auto mb-[34px] w-[248px] h-[42px] p-[13px] border-[0.5px] border-[#A7A7A7] rounded-[4px] font-kumbhsans font-[500] text-[14px] outline-none"
          type="password"
          placeholder="Create your Password"
        />
        <Link
          onClick={Register}
          className="w-[248px] h-[42px] mx-auto flex justify-center items-center bg-[#2D88D4] border-[0.5px] rounded-[4px] font-kumbhsans font-[700] text-[14px] text-[#FFFFFF]"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
