import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestData } from '../redux/actions/getDataAction';
import HoverInformation from './HoverInformation';

function Slider() {
  const dispatch = useDispatch();
  const [data] = useSelector((state) => state.data);
  const [itemSlide, setItemSlide] = useState(1);


  useEffect(() => {
    dispatch(requestData());
  }, []); 


  const initialItemDec = (length) => {
    itemSlide <= 1 ? setItemSlide(length) : setItemSlide(itemSlide - 1);
  };

  const initialItemInc = length => {
    itemSlide >= length ? setItemSlide(1) : setItemSlide(itemSlide + 1);
  };
    
  return (
      
      data &&
        <>
          <img className="background_image" src={data[itemSlide - 1].imageUrl} alt="" />
          <div className="container">
            
              <div className='item'>
                <p className="name_rest">{data[itemSlide - 1].name}</p>
                <img src={data[itemSlide - 1].imageUrl} alt={data[itemSlide - 1].name} />
              </div>
            

            <a className="previous" onClick={() => initialItemDec(data.length)}>
              {' '}
            </a>
            <a className="next" onClick={() => initialItemInc(data.length)}>
              {' '}
            </a>

            <HoverInformation index={itemSlide} data={data}/>

          </div>
        </> 
  )
}

export default Slider;