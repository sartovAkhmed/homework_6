import { useEffect, useRef, useState } from 'react';
import './css/App.css';
import { createPosts, deletePosts, getPosts } from './api/requests.ts'
import { User } from './components/User.jsx';

function App() {

  const [user, setUser] = useState([])
  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState('red')
  const backgroundColor = useRef(null)
  const [value, setValue] = useState('IM PROGRAMMIST')

  useEffect(() => {
    getPosts(setUser)
    // createPosts()
    // deletePosts()
  }, [])

  function handlerLoading() {
    setLoading(!loading)
    backgroundColor.current.classList = 'toggle'
    if (color === 'red') {
      setColor('green')
    } else {
      setColor('red')
    }
  }

  return (
    <div className="App">
      <div className='appWrapper'>
        { loading 
          ? <h1>Тут пока пусто</h1>
          : user.map((obj) => (
            <User {...obj} key={obj.id}/>
            ))}
        <button style={{backgroundColor: color}} onClick={() => handlerLoading()}>{
          loading === true
          ? 'Кликни если хочешь увидеть данные!'
          : 'Закрыть'
        }</button>
        <span ref={backgroundColor}>{value}</span>
        <input value={value} onChange={(event) => {setValue(event.target.value)}}/>
      </div>
    </div>
  );
}

export default App;
