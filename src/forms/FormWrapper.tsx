import React from "react";

const FormWrapper = ({ title, children }) => {
  return (
    <>
      <h1 className="bold text-2xl">{title}</h1>
      <div className="grid gap-1 grid-cols-[auto,minmaX(auto,500px)]">
        {children}
      </div>
    </>
  );
};

export default FormWrapper;
