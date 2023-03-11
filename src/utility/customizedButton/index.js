import React from "react";

const CustomisedButton = ({ value, className ,forName,buttonClicked}) => {
    const handleButton=()=>{
        buttonClicked(forName)
    }
  return <button className={className} onClick={handleButton}>{value}</button>;
};

export default CustomisedButton;
