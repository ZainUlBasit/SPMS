const AuthBtn = ({ title, onSubmit }) => {
  return (
    <button
      className={`w-[197px] h-fit py-2 bg-[#90898E] hover:bg-[#465462] rounded-[40px] text-white text-[1.2rem] font-[700] transition-all duration-500 ease-in-out`}
      onClick={onSubmit}
    >
      {title}
    </button>
  );
};

export default AuthBtn;
