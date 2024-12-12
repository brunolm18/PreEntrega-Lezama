import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="pt-36">
        <ItemListContainer greeting="¡Bienvenidos a TecnologyWord!" />
      </div>
    </div>
  );
}

export default App;
