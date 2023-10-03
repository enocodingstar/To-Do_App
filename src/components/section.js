import React, { useState, useEffect } from 'react';
import Views from './views';

function Section({ tasks, setTasks, handleDeleteClick }) {
  let taskCounter = tasks.length;
  let filtered = []

  const [currentView, setCurrentView] = useState('all');

  // Function to filter the tasks based on the views
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const filterTasksByView = () => {
      if (currentView === 'all') {
        return tasks;
      } else if (currentView === 'active') {
        return tasks.filter((task) => !task.completed);
      } else if (currentView === 'completed') {
        return tasks.filter((task) => task.completed);
      }
    };
  
    setFilteredTasks(filterTasksByView());
  }, [currentView, tasks]);
  





  // State for checking the status of the tasks

  // const [taskStatus, setTaskStatus] = useState(tasks.map((task) => task.completed ? 'completed' : 'active'))

  const toggleTaskStatus = (taskToToggle) => {
    const updatedTasks = filteredTasks.map((task) => {
      if (task.taskName === taskToToggle.taskName) {
        task.completed = !task.completed
        return { ...task };
      }
      return task;
    });
    setFilteredTasks(updatedTasks);
  };
  



  return (
    <section>
      <ul className='task-list'>
        {filteredTasks.map((task, index) => (
          <li className={`task-item ${task.completed ? 'completed' : 'active'}`} key={index}>
            <div className="check">
              <input
                type="checkbox"
                name="listItem"
                id={index}
                onChange={() => toggleTaskStatus(task)}

              />
              <label htmlFor={task.taskName} onClick={() => toggleTaskStatus(task)}></label>
            </div>
            <div className="details">
              <p>
                {task.taskName}
              </p>
              <small className="task-date">
                {`Created on: ${task.date}, ${task.time}`}
              </small>
            </div>
            <button onClick={handleDeleteClick}>╳</button>
          </li>
        ))}
        {/* Condition for checking if there are any tasks to be displayed */}
        {filteredTasks.length === 0 && (
          <em style={{ textAlign: "center", width: "100%", padding: "20px" }}>no tasks to display</em>
        )}
      </ul>
      <div className='action flex justify-between align-center'>
        <div className='task-counter'>
          <p>{`${taskCounter} items left`}</p>
        </div>
        <Views currentView={currentView} setCurrentView={setCurrentView} />
        <button>Clear Completed</button>
      </div>
    </section>
  );
}

export default Section;
