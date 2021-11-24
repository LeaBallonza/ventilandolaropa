import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/App.scss';
import './App.css';
import NavBar from './componets/NavBar/NavBar';
import ItemListContainer from './componets/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">  
         <NavBar/>
         <ItemListContainer/>
      </header>
    </div>
  );
}

export default App;
