import React from "react";
import "./ButtonCustom.css"
const ButtonCustom = ({ children, onClick, isInput }) => {
    const isNumber = (value) => {
      if (!isNaN(value) || value === "C" || value === ".") {
        return true
      }
      return false
    };
  
  
  const isSame = (value) => {
    if (value === "=") {
      return true
    }
    return false
  };

return (
    <>
    {isInput ? (
          <div className="input">{children}</div>
        ) : (
          <div
            className={`btnCustom-wrapper button
          ${isSame(children) ? "btn-same" : null} 
            ${isNumber(children) ? null : "op"}`}
            onClick={() => onClick(children)}
          >
            {children}
          </div>
        )}
    </>
)
};
export default ButtonCustom;
