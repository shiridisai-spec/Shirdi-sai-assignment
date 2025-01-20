import React, { useState } from 'react'

const ComponentGrid = () => {
  // The list of all the components
  const components = [
    { id: 1, label: 'comp1' },
    { id: 2, label: 'comp2' },
    { id: 3, label: 'comp3' },
    { id: 4, label: 'comp4' },
    { id: 5, label: 'comp5' },
    { id: 6, label: 'comp6' },
    { id: 7, label: 'comp7' },
    { id: 8, label: 'comp8' },
    { id: 9, label: 'comp9' },
  ]

  // Here I have defined a map which defines which components should be highlighted when a specific component is clicked
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
  }

  // I have defined a state to track currently active components
  const [activeComponents, setActiveComponents] = useState([])

  // The function to update active components based on the clicked component's ID
  const handleClick = (id) => {
    setActiveComponents(highlightMap[id] || [])
  }

  return (
    <div className='app'>
      <div className='components-container'>
        {components.map((comp) => (
          <div
            key={comp.id}
            className={`component ${
              activeComponents.includes(comp.id) ? 'active' : ''
            }`}
            onClick={() => handleClick(comp.id)}
          >
            {comp.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ComponentGrid
