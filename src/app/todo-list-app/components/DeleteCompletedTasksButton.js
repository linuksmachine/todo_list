import React from 'react';


function DeleteCompletedTasksButton(props) {

  return (
      <button
          type='button'
          className='btn btn__delete-filter text-uppercase'
          onClick={() => props.deleteCompletedTasks()}
      >
        <span className='visually-hidden'>Удалить завершенные задачи</span>
        <span>Удалить завершенные задачи</span>
      </button>
  );
}

export default DeleteCompletedTasksButton;
