import React from 'react'

const City = ({ city }) => {
  return (
      <div>
        <h2>City: {city.name}</h2>
        <img src="{city.image}" />
        <p>Description: {city.desc}</p>
      </div>
  )
}

export default City