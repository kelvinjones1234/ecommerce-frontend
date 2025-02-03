import React from "react";

const Login = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 xl:px-16 2xl:px-8 lg:px-8">
      <div className="text-[1.2rem] py-8">
        <h3 className="py-4">Login</h3>
        <p className="text-gray-600">
          Don't have an account yet? <br />
        </p>
        <p className="">Create account</p>
      </div>
      <input
        type="text"
        placeholder="Email"
        className="w-full border-[0.5px] border-black h-[2.5rem] px-2 my-2 text-[.8rem]"
      />

      <input
        type="password"
        placeholder="Password"
        className="border-black border w-full h-[2.5rem] px-2 my-2 text-[.8rem]"
      />
      <p className="text-gray-700 text-[.85rem]">Forgot your password?</p>
      <button className="bg-black text-white w-full h-[3rem] uppercase text-[.8rem] tracking-[.2rem] font-semibold my-10">
        Sign in
      </button>
      <p>Return to store</p>
    </div>
  );
};

export default Login;
