import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
      <ItemListContainer greeting="¡Bienvenidos a mi tienda!" />
      </div>
    </div>
  );
}

export default App;
