import React from 'react';
import './App.css';
import Table from './Components/Table';
import Provider from './Context/Provider';
import InputSearch from './Components/input';

function App() {
  return (
    <Provider>
      <InputSearch />
      <Table />
    </Provider>
  );
}

export default App;
