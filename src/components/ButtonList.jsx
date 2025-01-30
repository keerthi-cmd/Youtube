import React from "react";
import Button from "./Button";
const ButtonList = () => {
  const categoryList = [
    "All",
    "Live",
    "Gaming",
    "Songs",
    "Lives",
    "Soccers",
    "Cricketers",
    "Cooking",
    "Valentines",
    "Candids",
    "Life",
    "Games",
  ];
  return (
    <div className="flex">
      {categoryList.map((category) => (
        <Button key={category} name={category} />
      ))}
    </div>
  );
};

export default ButtonList;
