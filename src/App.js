import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componets/ItemDetailContainer/ItemDetailContainer'
import Cart from './componets/Cart/Cart'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <NavBar/>
         <Switch>
           <Route exact path="/">
            <ItemListContainer/>
          </Route>
          <Route  path="/category/:categoryId">
            <ItemListContainer/>
          </Route>
          <Route path="/detail/:paramId">
            <ItemDetailContainer/>
          </Route>
          <Route path="/Cart">
            <Cart/>
          </Route>
         </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
