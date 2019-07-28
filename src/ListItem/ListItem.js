import React, { useState } from 'react';
import PropType from 'prop-types';
import './ListItem.css';

const ListItem = ({description}) => {
  const [ descriptionState, setDescriptionState ] = useState(description);
  const [ checkedState, setCheckedState ] = useState(false);

  const handleCheck = () => {
    console.log(!checkedState);
    const updatedCheckedState = !checkedState;
    setCheckedState(updatedCheckedState);
  };

  const handleClick = () => {
    console.log('clicked!');
  };

  const completed = () => !!checkedState;

  return (
    <div className='list-item' style={{ display: (completed() ? 'none' : 'block')}}>
      <p className='description'>
        <input
          className='checkbox'
          type='checkbox'
          checked={checkedState}
          onChange={handleCheck.bind(this)} />
        {descriptionState}
      </p>
    </div>
  )
};

ListItem.propTypes = {
  description: PropType.string.isRequired,
};

export default ListItem;

