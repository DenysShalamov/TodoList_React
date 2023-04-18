import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

function Task({ id, text, done, onDelete, onChange }) {
  return (
    <li className={classNames('list-item', { 'list-item_done': done })}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        checked={done}
        onChange={() => onChange(id)}
      />
      {text}
      <button
        className="list-item__delete-btn"
        onClick={() => onDelete(id)}
      ></button>
    </li>
  );
}

Task.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string,
  done: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

Task.defaultProps = {
  text: '',
  done: false,
};

export default Task;
