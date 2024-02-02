const AuthBtn = ({ type, title, onSubmit, disabled, Loading }) => {
  return (
    <button
      type={type}
      className={`w-[197px] h-fit py-2 bg-[#90898E] ${
        Loading ? "" : "hover:bg-[#465462]"
      } rounded-[40px] text-white text-[1.2rem] font-[700] transition-all duration-500 ease-in-out`}
      onClick={onSubmit}
      disabled={disabled}
    >
      {Loading ? "Logging in..." : title}
    </button>
  );
};

export default AuthBtn;
