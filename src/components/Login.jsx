import React from "react";
import MainButtons from "./MainButtons";

const Login = () => {
  return (
    <div className="max-w-[600px] mx-auto px-4 xl:px-16 2xl:px-8 lg:px-8">
      <div className="text-[1.2rem] py-8">
        <h3 className="py-4 text-[1.4em]">Login</h3>
        <p className="text-gray-600">
          Don't have an account yet?{" "}
          <span className="block lg:inline text-black">Create account</span>
        </p>
      </div>
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
      <p className="text-gray-700 text-[.85rem] my-3">Forgot your password?</p>
      <div className="md:flex gap-8">
        <MainButtons
          containerClassName="relative overflow-hidden flex-1 md:max-w-[180px] mt-8 w-full"
          textClassName="font-semibold"
        >
          sign in
        </MainButtons>

        <div className="mt-8 mb-3 border-b border-black/90 py-1 text-sm text-gray-700 md:inline-flex">
          <button className="hover:text-black transition-colors duration-200">
            Return to store
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
