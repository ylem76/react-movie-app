import PropTypes from "prop-types";

// prop 자료형 구분하기 위해 rating(number) 추가

const foodILike = [{
  id: 1,
  name: '김치',
  image: './logo192.png',
  rating:5
},
{
  id: 2,
  name: 'banana',
  image: './logo192.png',
  rating:4
},
{
  id: 3,
  name: 'orange',
  image: './logo192.png',
  rating:4.9
},
{
  id: 4,
  name: 'watermelon',
  image: './logo192.png',
  rating:2.7
},
{
  id: 5,
  name: 'test',
  image: './logo192.png',
  rating:1.52
},
];


function Food({ name, picture, rating }) {
    return <div>
        <h3>I love { name }</h3>
        <h4>{rating}/5.0</h4>
        <img src={picture} alt={name}/>
    </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,

}

function App() {
  return (
    <div className="App">
        wow
        {foodILike.map(dish => (
          <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
        ))}
        
    </div>
    
    
  );
}


export default App;

