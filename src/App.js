function Food({ name, picture }) {
    return <div>
        <h3>I love { name }</h3>
        <img src={picture} alt={name}/>
    </div>
    // 하나의 블록만 리턴 가능 따라서 두 가지를 div로 묶어줘야함

}

// 정보를 담고 있는 배열 선언
const foodILike = [{
    name: '김치',
    image:'./logo192.png'    
},
{
    name: 'banana',
    image:'./logo192.png'    
},
{
    name: 'orange',
    image:'./logo192.png'    
},
{
    name: 'watermelon',
    image:'./logo192.png'    
},
{
    name: 'test',
    image:'./logo192.png'    
},];

function App() {
  return (
    <div className="App">
        wow
        {foodILike.map(dish => <Food name={dish.name} picture={dish.image}/>)}
    </div>
    // foodILike 배열을 가져와서 map 함수로 각각의 배열 아이템에 컴포넌트를 리턴하게 함
    // name과 image 키를 가지고 있는 오브젝트들의 배열이었는데,
    // map 함수로 foodILike의 정보를 이용한 리액트 컴포넌트를 리턴,
    // 화면에 출력되는 것은 
    //<Food name="kimchi" picture="./logo192.png"/> 와 동일하게 되는 것
  );
}

export default App;

