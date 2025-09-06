import React from "react";
interface Props {
  text: string;
}

const SubmitBtn: React.FC<Props> = ({ text }) => {
  return (
    <button
      type="submit"
      className="w-full md:w-[178px]  md:ms-auto md:me-0 bg-main rounded-lg h-[50px] flex-c font-bold text-sm text-white mt-6 "
    >
      {text}
    </button>
  );
};

export default SubmitBtn;
