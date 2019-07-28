import React, { useState } from 'react';
import PropType from 'prop-types';
import shortid from 'shortid';
import './List.css';
import ListItem from '../ListItem/ListItem';

const List = ({name}) => {
  const [ itemsState , setItemsState ] = useState(
    []
  );

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const updatedItemsState = [
        ...itemsState,
        <ListItem
          key={shortid.generate()}
          description={event.target.value}
        />
      ];
      setItemsState(updatedItemsState);
      event.target.value = '';
    };
  };

  return (
    <div className='list'>
      <h4>{name}</h4>
      <input
        className='new-task'
        onKeyPress={(event) => handleKeyPress(event)}
        placeholder='Adicionar uma tarefa pendente...'
      />
      {itemsState.map(item => item)}
    </div>
  )
};

List.propTypes = {
  name: PropType.string.isRequired,
};

export default List;

