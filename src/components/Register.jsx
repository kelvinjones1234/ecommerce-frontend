import React from "react";
import MainButtons from "./MainButtons";

const Register = () => {
  return (
    <div className="max-w-[600px] mx-auto px-4 xl:px-16 2xl:px-8 lg:px-8">
      <div className="text-[1.2rem] py-8">
        <h3 className="py-4">Create Account</h3>
      </div>
      <div className="border border-black mb-[1.2rem]">
        <input
          type="text"
          placeholder="First name"
          className="outline-none w-full outline-0 h-[2.5rem] px-2 text-[.8rem]"
        />
      </div>{" "}
      <div className="border border-black my-[1.2rem]">
        <input
          type="text"
          placeholder="Last name"
          className="outline-none w-full outline-0 h-[2.5rem] px-2 text-[.8rem]"
        />
      </div>{" "}
      <div className="border border-black my-[1.2rem]">
        <input
          type="email"
          placeholder="Email"
          className="outline-none w-full outline-0 h-[2.5rem] px-2 text-[.8rem]"
        />
      </div>{" "}
      <div className="border border-black">
        <input
          type="password"
          placeholder="Password"
          className="outline-none w-full outline-0 h-[2.5rem] px-2 text-[.8rem]"
        />
      </div>{" "}
      <div className="md:flex gap-8">
        {/* <button className="bg-black flex-1 md:max-w-[180px] text-white outline-0 w-full h-[3rem] uppercase text-[.8rem] tracking-[.2rem] font-semibold mt-8">
          Sign in
        </button> */}

        <MainButtons
          containerClassName="relative overflow-hidden flex-1 md:max-w-[180px] mt-8 w-full"
          textClassName="font-semibold"
        >
          create
        </MainButtons>

        <p className="my-8 border-b-[0.05px] md:inline-flex-1 border-black inline-flex py-1 text-[.9rem] text-gray-700 cursor-pointer">
          <button className="">Return to store</button>
        </p>
      </div>
    </div>
  );
};

export default Register;
