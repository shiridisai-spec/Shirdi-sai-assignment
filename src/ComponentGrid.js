import React, { useState } from "react";

const ComponentGrid = () => {
  const components = [
    { id: 1, label: "comp1" },
    { id: 2, label: "comp2" },
    { id: 3, label: "comp3" },
    { id: 4, label: "comp4" },
    { id: 5, label: "comp5" },
    { id: 6, label: "comp6" },
    { id: 7, label: "comp7" },
    { id: 8, label: "comp8" },
    { id: 9, label: "comp9" },
  ];

  const highlightMap = {
    1: [1, 2, 5, 6, 8, 9, 3, 4, 7],
    2: [2, 5, 6, 8, 9],
    3: [3, 7],
    4: [4],
    5: [5],
    6: [6, 8, 9],
    7: [7],
    8: [8],
    9: [9],
  };

  const [activeComponents, setActiveComponents] = useState([]);

  const handleClick = (id) => {
    setActiveComponents(highlightMap[id] || []);
  };

  return (
    <div className="app">
      <div className="components-container">
        {/* {components.slice(0, 1).map((comp) => (
          <div
            key={comp.id}
            className={`component ${
              activeComponents.includes(comp.id) ? "active" : ""
            }`}
            onClick={() => handleClick(comp.id)}
          >
            {comp.label}
          </div>
        ))}

        {components.slice(1, 2).map((comp) => (
          <div
            key={comp.id}
            className={`component ${
              activeComponents.includes(comp.id) ? "active" : ""
            }`}
            onClick={() => handleClick(comp.id)}
          >
            {comp.label}
          </div>
        ))}

        {components.slice(2, 4).map((comp) => (
          <div
            key={comp.id}
            className={`component ${
              activeComponents.includes(comp.id) ? "active" : ""
            }`}
            onClick={() => handleClick(comp.id)}
          >
            {comp.label}
          </div>
        ))} */}

        {components.map((comp) => (
          <div
            key={comp.id}
            className={`component ${
              activeComponents.includes(comp.id) ? "active" : ""
            }`}
            onClick={() => handleClick(comp.id)}
          >
            {comp.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentGrid;
