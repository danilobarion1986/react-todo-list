import React, { useState } from 'react';
import PropType from 'prop-types';
import './ListItem.scss';
import ListItemActions from '../ListItemActions/ListItemActions';

const ListItem = (props) => {
  const [ descriptionState, setDescriptionState ] = useState(props.description);
  const [ completedState, setCompletedState ] = useState(props.completed);

  const handleCompleted = () => {
    const updatedCompletedState = !completedState;
    setCompletedState(updatedCompletedState);
  };

  const handleClicked = () => {
    console.log('clicked');
  };

  // This don't work!
  // Use reducers instead: https://reactjs.org/docs/hooks-reference.html#usereducer
  const completed = () => !!completedState;

  return (
    <div className={`list-item ${completed() ? 'list-item-completed' : ''}`}>
      <p className='description' onClick={handleClicked()}>
        <input
          className='checkbox'
          type='checkbox'
          checked={completedState}
          onChange={handleCompleted.bind(this)} />
        {descriptionState}
      </p>
      <ListItemActions />
    </div>
  )
};

ListItem.defaultProps = {
  completed: false,
};

ListItem.propTypes = {
  description: PropType.string.isRequired,
  completed: PropType.bool,
};

export default ListItem;

