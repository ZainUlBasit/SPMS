import { useState } from "react";
import { RiEyeFill, RiEyeCloseFill } from "react-icons/ri"; // Import eye icons from react-icons

const AuthInputPassword = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  touched,
  isError,
  errorMsg,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="relative w-[297px] font-[Quicksand]">
      <p className="absolute top-[-11px] left-3 w-fit bg-white font-[Quicksand] text-[15px] z-10 font-bold">
        {label}
      </p>
      <div className="relative font-[Quicksand]">
        <input
          type={showPassword ? "text" : "password"} // Toggle between 'text' and 'password'
          name={name}
          placeholder={placeholder}
          className="px-3 py-2 pr-10 border border-gray-300 rounded-[7.94px] w-full outline-none"
          value={value}
          onChange={onChange}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 px-3 py-2"
          onClick={() => setShowPassword(!showPassword)}
        >
          {!showPassword ? <RiEyeCloseFill /> : <RiEyeFill />}{" "}
        </button>
      </div>
      {touched && isError && (
        <div className="text-red-500 font-[Quicksand] pl-2 pt-1 transition-all ease-in-out">
          {errorMsg}
        </div>
      )}
    </div>
  );
};

export default AuthInputPassword;
