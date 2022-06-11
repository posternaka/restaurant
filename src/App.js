import { useState } from 'react';
import './animation.css';

function App() {
  const [restaurants, setRest] = useState([
    {
      id: 0,
      imageUrl: '/img/hall/0_theView.jpg',
      name: 'The View',
      capacity: 80,
      rating: 4,
      contact: '8 044 702-88-88',
      kitchen: 'авторская и европейская',
      text: 'Уникальный ресторан в центре города удивит посетителей не только авторской кухней в исполнении шеф-повара из Европы, но и откроет удивительный вид на Минск с высоты птичьего полета. Изысканная кухня, шикарный интерьер и высокий уровень обслуживания заставят вас по-новому взглянуть на белорусскую столицу, на наш родной Минск.',
    },
    {
      id: 1,
      imageUrl: '/img/hall/1_Astoria.jpg',
      name: 'Astoria',
      capacity: 70,
      rating: 5,
      contact: '8 029 106-58-41',
      kitchen: 'европейская и азербайджанская',
      text: 'Ресторан «Astoria central (Астория централ)» в Минске предлагает отвлечься от повседневных забот и приятно провести время. Для гостей — камерная и спокойная атмосфера, гостеприимное и вежливое обслуживание, вкусные и разнообразные блюда, тихая фоновая и живая музыка.',
    },
    {
      id: 2,
      imageUrl: '/img/hall/2_ZalkindKitchen.jpg',
      name: 'Zalkind Kitchen',
      capacity: 30,
      rating: 5,
      contact: '8 029 621-62-62',
      kitchen: 'арабская, восточная, израильская, ливанская, палестинская',
      text: '«Zalkind Kitchen (Залкинд китчен)» — камерный и уютный ресторан для любителей высокой кухни, хорошего кофе и редких вин, для людей ценящих безупречный сервис и утончённую атмосферу.',
    },
    {
      id: 3,
      imageUrl: '/img/hall/3_LeGosse.jpg',
      name: 'Le Gosse',
      capacity: 32,
      rating: 5,
      contact: '8 029 618-06-18',
      kitchen: 'авторская, европейская, итальянская, средиземноморская, французская',
      text: 'Restaurant & Catering Le Gosse — это эмоциональная и понятная еда на каждый день по честной цене. Главная ценность и приоритет – гости ресторана, которым здесь дают искренний, доброжелательный и ненавязчивый сервис.',
    },
    {
      id: 4,
      imageUrl: '/img/hall/4_Fornello.jpg',
      name: 'Fornello',
      capacity: 120,
      rating: 5,
      contact: '8 017 279-30-00',
      kitchen: 'от Италии до Египта',
      text: 'Ресторан Fornello - это сердце гастрономии Minsk Marriott Hotel. Пространство ресторана включает в себя основной зал на 120 посадочных мест, отдельную Private Dining Room вместимостью до 10 человек и летнюю террасу, рассчитанную на 40 гостей.',
    },
  ]);

  fetch('https://629e14403dda090f3c12ec2c.mockapi.io/v1/data').then(res => res.json()).then(data => console.log(data[0]));

  const [itemSlide, setItemSlide] = useState(1);

  const initialItemDec = () => {
    itemSlide <= 1 ? setItemSlide(restaurants.length) : setItemSlide(itemSlide - 1);
  };

  const initialItemInc = () => {
    itemSlide >= restaurants.length ? setItemSlide(1) : setItemSlide(itemSlide + 1);
  };

  return (
    <div className="wrapper"> 

      <img className="background_image" src={restaurants[itemSlide - 1].imageUrl} alt="" />

      <div className="container">
        {
          <div className="item">
            <p className="name_rest">{restaurants[itemSlide - 1].name}</p>
            <img src={restaurants[itemSlide - 1].imageUrl} alt={restaurants[itemSlide - 1].name} />
          </div>
        }

        <a className="previous" onClick={() => initialItemDec()}>
          {' '}
        </a>
        <a className="next" onClick={() => initialItemInc()}>
          {' '}
        </a>

        <div className="block_info">
            <div className="info_but"><a>i</a></div>
            <div className="info_body">
                <p className="body_text">{restaurants[itemSlide - 1].text}</p>
                <p className="body_text">Вместимость ресторана: {restaurants[itemSlide - 1].capacity}</p>
                <p className="body_text">Кухня: {restaurants[itemSlide - 1].kitchen}</p>
                <p className="body_text">Контакты: {restaurants[itemSlide - 1].contact}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;



