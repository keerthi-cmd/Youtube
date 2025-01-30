import React, { useState } from "react";
import { previewLength } from "../utils/constants";
const Description = ({ text }) => {
  console.log("Description component");
  const [expanded, setExpanded] = useState(false);

  return (
    text && (
      <div className="text-gray-800 text-[16px] mt-2 bg-gray-200 p-2 rounded-lg">
        <p>{expanded ? text : text.slice(0, previewLength) + "..."}</p>

        <button
          className="text-blue-500 font-semibold mt-1"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Show More"}
        </button>
      </div>
    )
  );
};

export default Description;
