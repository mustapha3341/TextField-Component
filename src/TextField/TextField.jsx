import React from "react";

const Input = ({ children }) => {
  return (
    <div>
      <p>Input</p>
    </div>
  );
};

const Icon = ({ children }) => {
  return (
    <div>
      <p>Icon</p>
    </div>
  );
};

const TextField = ({ children, ...rest }) => {
  return React.Children.map(children, (child) => {
    return React.cloneElement(child, rest);
  });
};

TextField.Input = Input;
TextField.Icon = Icon;

export default TextField;
