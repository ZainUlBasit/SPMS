import React from "react";
import Button from "../Buttons/Button";

const NavGenerator = ({Data}) => {
  return (
    <div className="w-full flex justify-center items-center my-3">
      {Data.map((dt,i) => (
        <Button data={dt} key={i} />
      ))}
    </div>
  );
};

export default NavGenerator;
