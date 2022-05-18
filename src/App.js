import './App.css';
import TodoList from './components/TodoList';
import pic from './Nuke.png';

function App() {
  return (
    
    <div className="Reactor-Todo-App">
      <div className="Spinning-Logo1">
        <img src={pic} />
      </div>
      <TodoList />
    </div>
  );
}

export default App;
