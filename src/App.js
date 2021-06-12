import './App.css';
import NavBar from './components/navBar';
import ItemListContainer from './components/container/ItemListContainer';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
    <ItemListContainer/>
    </div>
  );
}

export default App;
