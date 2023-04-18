import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CreateTaskInput = ({ onCreate }) => {
  const [text, setText] = useState('');
  const handleCreateTask = () => {
    onCreate(text);
    setText('');
  };
  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="btn create-task__btn" onClick={handleCreateTask}>
        Create
      </button>
    </div>
  );
};

CreateTaskInput.propTypes = {
  onCreate: PropTypes.func,
};

export default CreateTaskInput;
