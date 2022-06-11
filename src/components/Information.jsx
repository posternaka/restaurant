import React from 'react'

function Information() {

    
  return (
    <div className="block_info">
        <div className="info_but"><a>i</a></div>
        <div className="info_body">
            <p className="body_text">{restaurants[itemSlide - 1].text}</p>
            <p className="body_text">Вместимость ресторана: {restaurants[itemSlide - 1].capacity}</p>
            <p className="body_text">Кухня: {restaurants[itemSlide - 1].kitchen}</p>
            <p className="body_text">Контакты: {restaurants[itemSlide - 1].contact}</p>
        </div>
    </div>
  )
}

export default Information;