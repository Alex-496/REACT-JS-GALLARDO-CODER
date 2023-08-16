import React, { useState } from 'react';
import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Destiny from './paginas/Destiny';
import Historia from './paginas/Historia';
import Contacto from './paginas/Contacto';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  let pageContent;

  switch (currentPage) {
    case 'Destiny':
      pageContent = <Destiny />;
      break;
    case 'Hisstoria':
      pageContent = <Historia />;
      break;
    case 'Contacto':
      pageContent = <Contacto />;
      break;
    default:
      pageContent = <ItemListContainer greeting={"Bienvenidos a Tienda-Destiny"} />;
  }

  return (
    <div className="App">
      <Navbar onNavItemClick={setCurrentPage} />
      {pageContent}
    </div>
  );
}

export default App;