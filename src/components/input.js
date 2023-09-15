import React from 'react';

function Input({ tasks, setTasks, taskName, setTaskName }) {
  const clearInput = () => {
    setTaskName('');
  }

  const submitTask = (e) => {
    e.preventDefault();

    if (!taskName.trim()) {
      return;
    }

    addTask(taskName);
    clearInput();
  }

  const addTask = (name) => {
    const newTask = name;
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      submitTask(e);
    }
  }

  return (
    <div className='input-container'>
        <div className="check" onSubmit={submitTask}>
          <input type='checkbox' name='addnew' id='addnew' disabled></input>
          <label htmlFor='addnew' className={taskName.trim() ? 'checked' : ''}></label>
        </div>
        <input
          type='text'
          placeholder='Add new task...'
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          onKeyUp={handleKeyPress} // Listen for Enter key press
        ></input>
    </div>
  );
}

export default Input;

