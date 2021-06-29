import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './App.css';
import NavBar from './components/navBar';
import ItemListContainer from './components/container/ItemListContainer';
import ItemDetailContainer from './components/container/ItemDetailContainer';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <header className="App-header">
        <NavBar/>
      </header>
        <Switch>
          <Route path="/detalle" component={ItemDetailContainer}/>
          <Route path="/"  component={ItemListContainer}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
