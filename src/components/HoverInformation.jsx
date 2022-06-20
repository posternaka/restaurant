
function HoverInformation({data, index}) {

  return (
    <div className="block_info"> 
      {
        data && 
          <>
            <div className="info_but"><a>i</a></div>
            <div className="info_body">
                <p className="body_text">{data[index - 1].text}</p>
                <p className="body_text">Вместимость ресторана: {data[index - 1].capacity}</p>
                <p className="body_text">Кухня: {data[index - 1].kitchen}</p>
                <p className="body_text">Контакты: {data[index - 1].contact}</p>
            </div>
          </>
      }
    </div>
  )
}

export default HoverInformation;