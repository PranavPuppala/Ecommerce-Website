import { useState } from "react";
import { SpecState } from "./states";

export const DescriptionPanel = ({
  description,
  features,
  specs,
}: {
  description: string;
  features: string[];
  specs: SpecState;
}) => {
  const [openDropdowns, setOpenDropdowns] = useState([false, false]);

  const handleToggleDropdown = (index: number) => {
    setOpenDropdowns((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const formatKey = (key: string) => {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase())
      .trim();
  };

  return (
    <div>
      {/* Overview */}
      <div className="bg-white border-t py-4">
        <button onClick={() => handleToggleDropdown(0)} className="w-full text-left text-lg font-semibold">
          Overview
        </button>
        {openDropdowns[0] && (
          <div className="p-2 text-sm">
            <p>{description}</p>
            <ul className="list-disc pl-5 marker:text-blue-600 mt-2">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Specs */}
      <div className="bg-white border-y py-4">
        <button onClick={() => handleToggleDropdown(1)} className="w-full text-left text-lg font-semibold">
          Specifications
        </button>
        {openDropdowns[1] && (
          <div className="p-2 text-sm">
            <ul className="list-disc marker:text-blue-600">
              {Object.entries(specs).map(
                ([key, value], index) =>
                  value !== "" && (
                    <li key={index}>
                      <span className="font-semibold">{formatKey(key)}: </span>
                      {key === "screenSize" ? `${value} inches` : value || "N/A"}
                    </li>
                  )
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
