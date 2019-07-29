import React, { useState } from 'react';
import shortid from 'shortid';
import './ListsMenu.scss';
import List from '../List/List';

const ListsMenu = () => {
  const [ listsState, setListsState ] = useState([]);
  const handleCreateList = (event) => {
    if (event.key === 'Enter' && !!event.target.value) {
      const updatedListsState = [
        ...listsState,
        <List
          key={shortid.generate()}
          name={event.target.value}
        />
      ];
      setListsState(updatedListsState);
      event.target.value = '';
    };
  };

  return (
    <div className='lists-menu'>
      {listsState.map(list => {
        return <p className='list'><i className='list-icon fas fa-list'></i>{list.props.name}</p>
      })}
      <input
        type='text'
        className='new-list'
        placeholder='+ Create list'
        onKeyPress={(event) => handleCreateList(event)} />
    </div>
  )
}

export default ListsMenu;
