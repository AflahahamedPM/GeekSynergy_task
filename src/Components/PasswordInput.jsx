import React,{memo} from "react";

const PasswordInput = memo(() => {
  return (
    <input
      type="password"
      placeholder="Password"
      name="password"
      className="w-72 px-4 py-2 rounded-lg border-[1px] border-gray-200 focus:outline-none mb-5"
    />
  );
});

export default PasswordInput;
