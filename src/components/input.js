import React from 'react';

function Input({ tasks, setTasks, taskName, setTaskName }) {

  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();
  let cHour = currentDate.getHours();
  let cMinute = currentDate.getMinutes();
  let time = cHour + ":" + cMinute;
  let date = cMonth + "/" + cDay + "/" + cYear;

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
    const newTask = {
      taskName: name,
      completed: false,
      date: date,
      time: time
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    console.log(tasks);
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      submitTask(e);
    }
  }

  return (
    <div className='input-container'>
        <div className="check" onSubmit={submitTask}>
          <input type='checkbox' name='addnew' id='addnew'></input>
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

