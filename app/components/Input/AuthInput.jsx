import React from "react";

const AuthInput = ({
  id,
  name,
  label,
  placeholder,
  required,
  Value,
  setValue,
}) => {
  return (
    <div className="relative w-[297px] font-[Quicksand]">
      <p className="absolute top-[-11px] left-3 w-fit bg-white h-[13px] text-[15px] font-bold">
        {label}
      </p>
      <input
        type="text"
        required={required}
        id={id}
        name={name}
        placeholder={placeholder}
        className="px-3 py-2 pr-10 border border-gray-300 rounded-[7.94px] w-full outline-none"
        value={Value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default AuthInput;
