import React, { useState } from 'react';


function Form(props) {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    props.addTask(name);
    setName('');
  }


  function handleChange(e) {
    setName(e.target.value);
  }

  return (
      <form onSubmit={handleSubmit} data-testid='form'>
        <h2 className='label-wrapper'>
          <label htmlFor='new-todo-input' className='label__lg'>
            Что должно быть сделано?
          </label>
        </h2>

        <input
            type='text'
            id='new-todo-input'
            className='input input__lg'
            name='text'
            autoComplete='off'
            value={name}
            onChange={handleChange}
        />
      </form>
  );
}

export default Form;
