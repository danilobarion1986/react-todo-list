import React from 'react';
import './App.css';
import List from './List/List';
import ListsMenu from './ListsMenu/ListsMenu';

function App() {
  return (
    <div className='app grid-container'>
      <div>
        <input type='text' placeholder='Busca...' style={{ verticalAlign: 'center', margin: '16px' }} />
      </div>

      <div style={{ textAlign: 'left', margin: '4px' }}>
        <p>Nome da lista selecionada</p>
      </div>
      <div>
        <ListsMenu />
      </div>
      <div>
        <List name='First list' />
      </div>
    </div>
  );
}

export default App;
