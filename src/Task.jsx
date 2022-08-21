import React from 'react';
import classNames from 'classnames';

const Task = ({ text, done }) => {
  return (
    <li className={classNames('list-item', { 'list-item_done': done })}>
      <input
        type="checkbox"
        className="list-item__checkbox"
        defaultChecked={done}
      />
      <span className="list-item__text">{text}</span>
      <button className="list-item__delete-btn"></button>
    </li>
  );
};

export default Task;
