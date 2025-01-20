import React, { useState } from 'react'

const ComponentGrid = () => {
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
        <div
          key={1}
          style={{
            marginBottom: '20px',
            marginLeft: '20px',
          }}
          className={`component ${
            activeComponents.includes(1) ? 'active' : ''
          }`}
          onClick={() => handleClick(1)}
        >
          comp1
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <div
              style={{
                marginLeft: '32px',
              }}
              key={2}
              className={`component ${
                activeComponents.includes(2) ? 'active' : ''
              }`}
              onClick={() => handleClick(2)}
            >
              comp2
            </div>
          </div>

          <div
            style={{
              display: 'flex',
            }}
          >
            <div
              key={3}
              className={`component ${
                activeComponents.includes(3) ? 'active' : ''
              }`}
              onClick={() => handleClick(3)}
            >
              comp3
            </div>

            <div
              key={4}
              style={{
                marginLeft: '20px',
              }}
              className={`component ${
                activeComponents.includes(4) ? 'active' : ''
              }`}
              onClick={() => handleClick(4)}
            >
              comp4
            </div>
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
            }}
          >
            <div
              key={5}
              style={{
                marginRight: '29px',
                marginLeft: '42px',
              }}
              className={`component ${
                activeComponents.includes(5) ? 'active' : ''
              }`}
              onClick={() => handleClick(5)}
            >
              comp5
            </div>

            <div
              key={6}
              className={`component ${
                activeComponents.includes(6) ? 'active' : ''
              }`}
              onClick={() => handleClick(6)}
            >
              comp6
            </div>
          </div>

          <div
            key={7}
            style={{
              marginRight: '15%',
              marginTop: '20px',
            }}
            className={`component ${
              activeComponents.includes(7) ? 'active' : ''
            }`}
            onClick={() => handleClick(7)}
          >
            comp7
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div
            key={8}
            style={{
              marginRight: '47px',
              marginTop: '20px',
              marginLeft: '29%',
            }}
            className={`component ${
              activeComponents.includes(8) ? 'active' : ''
            }`}
            onClick={() => handleClick(8)}
          >
            comp8
          </div>

          <div
            key={9}
            style={{
              marginRight: '20px',
              marginTop: '20px',
            }}
            className={`component ${
              activeComponents.includes(9) ? 'active' : ''
            }`}
            onClick={() => handleClick(9)}
          >
            comp9
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComponentGrid
