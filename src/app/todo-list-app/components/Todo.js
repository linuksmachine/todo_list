import React from 'react';

export default function Todo(props) {

  return (
      <li className='todo'>
        <div className='stack-small'>
          <div className='checkbox-custom'>
            <input
                id={props.id}
                type='checkbox'
                defaultChecked={props.completed}
                onChange={() => props.toggleTaskCompleted(props.id)}
            />
            <label className='todo-label' htmlFor={props.id}>
              {props.name}
            </label>
          </div>
        </div>
      </li>
  );
}
