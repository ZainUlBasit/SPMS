import { roboto } from "@/lib/Fontss";
import React from "react";

const LedgerDateInput = ({
  name,
  label,
  placeholder,
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
        className={`absolute top-[-11px] left-3 w-fit bg-[#465462] text-white h-[13px] text-[1.1rem] font-bold font-[Quicksand] ${roboto.className}`}
      >
        {label}
      </label>
      <input
        type="date"
        required={required}
        name={name}
        placeholder={placeholder}
        className={`px-3 py-3 pr-3 font-bold border-[2px] border-white bg-transparent !text-white rounded-[7.94px] w-full outline-none ${roboto.className}`}
        value={value}
        onChange={onChange}
      />
      {touched && isError && (
        <div className="text-red-500 font-[Quicksand] pl-2 pt-1">
          {errorMsg}
        </div>
      )}
    </div>
  );
};

export default LedgerDateInput;
