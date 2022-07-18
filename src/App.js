import React, { useState, useRef, useEffect } from 'react';
import { nanoid } from 'nanoid';

import Form from './app/todo-list-app/components/Form';
import FilterButton from './app/todo-list-app/components/FilterButton';
import Todo from './app/todo-list-app/components/Todo';
import DeleteCompletedTasksButton from './app/todo-list-app/components/DeleteCompletedTasksButton';

import './App.css';


function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const FILTER_MAP = {
  Все: () => true,
  Активные: task => !task.completed,
  Завершенные: task => task.completed
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('Все');

  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map(task => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function deleteCompletedTasks() {
    const remainingTasks = tasks.filter(task => task.completed === false);
    setTasks(remainingTasks);
  }

  const taskList = tasks
      .filter(FILTER_MAP[filter])
      .map(task => (
          <Todo
              id={task.id}
              name={task.name}
              completed={task.completed}
              key={task.id}
              toggleTaskCompleted={toggleTaskCompleted}
          />
  ));

  const filterList = FILTER_NAMES.map(name => (
      <FilterButton
          key={name}
          name={name}
          isPressed={name === filter}
          setFilter={setFilter}
      />
  ));

  function addTask(name) {
    const newTask = { id: 'todo-' + nanoid(), name: name, completed: false };
    setTasks([...tasks, newTask]);
  }


  const tasksNoun = taskList.length !== 1 ? 'задач(-и)' : 'задач(-a)';
  const headingText = `${taskList.length} ${tasksNoun} здесь`;

  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(tasks.length);

  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  return (
      <div className='todo-app stack-large'>
        <Form addTask={addTask} />
        <h2 className='list-heading' id='list-heading' tabIndex='-1' ref={listHeadingRef}>
          {headingText}
        </h2>
        <ul
            className='todo-list stack-large stack-exception'
            aria-labelledby='list-heading'
        >
          {taskList}
        </ul>
        <div className='btn__delete-filter-wrapper'>
          <DeleteCompletedTasksButton deleteCompletedTasks={deleteCompletedTasks} />
        </div>
        <div className='filters btn-group stack-exception'>
          {filterList}
        </div>
      </div>
  );
}

export default App;
