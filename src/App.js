import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {addTask} from './redux/addlister'

function App() {
  const {todo} = useSelector((state) => state.todoReducer.todo)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(addTask({"name": "XD", "age": 7}))}></button>
        <p>{JSON.stringify(todo)}</p>
      </div>
    </div>
  );
}

export default App;
