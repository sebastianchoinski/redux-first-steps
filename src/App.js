import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from './redux/addlister'

function App() {
  const { todos } = useSelector((state) => state.task)
  // equivalent to
  // const a = useSelector((state) => state.task.todos)
  // todos jest doslownie zabranym fieldem z task
  const dispatch = useDispatch()
  console.log(todos);
  return (
    <div className="App">
      <div>
        <button onClick={() => dispatch(addTask({ "name": "XD", "age": 7 }))}></button>
        <p>{todos?.length ? todos.map(t => <span>{t.name}</span>) : null}</p>
      </div>
    </div>
  );
}

export default App;
