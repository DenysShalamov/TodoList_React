import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CreateTaskInput = ({ onCreate }) => {
  const [value, setValue] = useState('');

  const onChange = event => {
    setValue(event.target.value);
  };

  const onTaskCreate = () => {
    onCreate(value);
    setValue('');
  };

  return (
    <div className="create-task">
      <input
        className="create-task__input"
        type="text"
        value={value}
        onChange={onChange}
      />
      <button className="btn create-task__btn" onClick={onTaskCreate}>
        Create
      </button>
    </div>
  );
};

CreateTaskInput.propTypes = {
  onCreate: PropTypes.func.isRequired,
};
export default CreateTaskInput;
