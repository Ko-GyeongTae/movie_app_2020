import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating}) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image: "https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/3YN/image/FGcrS-cA2pDjjlfrz_rUH4AEy4k.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Ramen",
    image: "https://res.heraldm.com/phpwas/restmb_idxmake.php?idx=507&simg=/content/image/2020/05/23/20200523000093_0.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "Samgyeopsal",
    image: "https://newsimg.hankookilbo.com/cms/articlerelease/2020/06/11/202006111362061920_7.jpg",
    rating: 5.0
  },
  {
    id: 4,
    name: "Bibimbap",
    image: "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MjRfMjI3/MDAxNDkzMDIzMjc4MjU2.L-3Vv9r0XjeRGGncaB0p0II6mw9-NoBfu2k4PMCrTdgg.jP8wA64wrWrXrH3ZTP4UBCPR6ZWppqqnhXkS8FPpYMQg.JPEG.estelle926/151435979-56a57a083df78cf772888a61.jpg?type=w800",
    rating: 4.8
  },
  {
    id: 5,
    name: "Doncasu",
    image: "https://lh3.googleusercontent.com/proxy/9Uv7qHx9VcgU7_GBqslGd0PtvWVQ1ETjCbrv4XK31Y_rxndsMraI2EPktJuILLpFmlWUc1sAgmyAUn64V2YjnJuh8BryAtBpC2KvtKDazxHG-TrSwvkrTaGdXLGvJRRyL1ypN8p2h79d-Q",
    rating: 4.7
  },
  {
    id: 6,
    name: "Kimbap",
    image: "https://craftlog.com/m/i/1110860=s1280=h960",
    rating: 4.5
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  )
}

export default App;
