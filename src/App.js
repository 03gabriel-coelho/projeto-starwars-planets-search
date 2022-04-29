import React from 'react';
import './App.css';
import Table from './Components/Table';
import Provider from './Context/Provider';
import FiltroNumber from './Components/filtroNumber';
import InputSearch from './Components/input';
import Filtros from './Components/filtros';

function App() {
  return (
    <Provider>
      <InputSearch />
      <FiltroNumber />
      <Filtros />
      <Table />
    </Provider>
  );
}

export default App;
