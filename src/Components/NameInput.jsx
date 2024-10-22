import React, { memo } from "react";

const NameInput = memo(() => {
  return (
    <input
      type="text"
      placeholder="Name"
      name="name"
      className="w-72 px-4 py-2 rounded-lg border-[1px] border-gray-200 focus:outline-none mb-5"
    />
  );
});

export default NameInput;
