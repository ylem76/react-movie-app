function Food({ name, picture }) {
    return <div>
        <h3>I love { name }</h3>
        <img src={picture} alt={name}/>
    </div>
}

// 정보를 담고 있는 배열 선언
// react의 element들은 유일해야 하는데, 리스트 안으로 넣을 때 유일성을 잃어버림(원인은 말 안해줌.)
// 개별 props가 다 고유한 key를 가져야함.
// 해결하기 위해 id를 따로 지정 -> id를 컴포넌트의 key prop로 사용

const foodILike = [{
        id: 1,
        name: '김치',
        image: './logo192.png'
    },
    {
        id: 2,
        name: 'banana',
        image: './logo192.png'
    },
    {
        id: 3,
        name: 'orange',
        image: './logo192.png'
    },
    {
        id: 4,
        name: 'watermelon',
        image: './logo192.png'
    },
    {
        id: 5,
        name: 'test',
        image: './logo192.png'
    },
];

function App() {
  return (
    <div className="App">
        wow
        {foodILike.map(dish => (
          <Food key={dish.id} name={dish.name} picture={dish.image}/>
        ))}
        
    </div>
    
    
  );
}

export default App;

