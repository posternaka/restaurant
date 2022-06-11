import React from 'react'

function Slider() {

    
  return (
    <div className="item">
        <p className="name_rest">{restaurants[itemSlide - 1].name}</p>
        <img src={restaurants[itemSlide - 1].imageUrl} alt={restaurants[itemSlide - 1].name} />
    </div>
  )
}

export default Slider;