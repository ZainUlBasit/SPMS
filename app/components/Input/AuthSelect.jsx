import React from "react";

const AuthSelect = ({
  name,
  label,
  options,
  required,
  value,
  onChange,
  touched,
  isError,
  errorMsg,
}) => {
  return (
    <div className="relative w-[297px] font-[Quicksand]">
      <label
        htmlFor={name}
        className="absolute top-[-11px] left-3 w-fit bg-white h-[13px] text-[15px] font-bold font-[Quicksand]"
      >
        {label}
      </label>
      <select
        required={required}
        name={name}
        className="px-3 py-2 border border-gray-300 rounded-[7.94px] w-full outline-none font-[Quicksand]"
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {touched && isError && (
        <div className="text-red-500 font-[Quicksand] pl-2 pt-1">{errorMsg}</div>
      )}
    </div>
  );
};

export default AuthSelect;
