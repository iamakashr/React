import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`px-5 py-2 rounded-lg border border-slate-700 text-white font-medium ${className}`}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
