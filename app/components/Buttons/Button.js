import React from "react";

const Button = ({ data }) => {
  const currentWidth = data.Width
  return (
    <button
      className={`relative inline-block text-center text-lg tracking-[1px] no-underline text-black cursor-pointer transition-all ease-in-out duration-500  m-[15px] py-2.5 rounded-[10px] border-2 border-solid border-[black] hover:text-[white] shadow-[inset_0_0_0_0_black] hover:shadow-[inset_0_-100px_0_0_black] active:scale-90 ${
        currentWidth
      } flex items-center gap-x-2 justify-center`}
    >
      {data.Icon && <data.Icon className="text-[1.5rem]" />}
      <span>{data.title}</span>
    </button>
  );
};

export default Button;
