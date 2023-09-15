import React from 'react';
import Views from './views';

function Section({ tasks, handleDeleteClick }) {
  let currentDate = new Date();
  let cDay = currentDate.getDate();
  let cMonth = currentDate.getMonth() + 1;
  let cYear = currentDate.getFullYear();
  let cHour = currentDate.getHours();
  let cMinute = currentDate.getMinutes();
  let time = cHour + ":" + cMinute;
  let date = cMonth + "/" + cDay + "/" + cYear;
  let taskCounter = tasks.length;

  // Function for deleting tasks

  return (
    <section>
      <ul className='task-list'>
        {tasks.map((task, index) => (
          <li className='task-item active' key={index}>
            <div className="check">
              <input type="checkbox" name="listItem" id={task} />
              <label htmlFor={task}></label>
            </div>
            <div className="details">
              <p>
                {task}
              </p>
              <small className="task-date">
                {`Created on: ${date}, ${time}`}
              </small>
            </div>
            <button onClick={handleDeleteClick}>╳</button>
          </li>
        ))}
        {/* Condition for checking if there are any tasks to be displayed */}
        {tasks.length === 0 && (
          <em style={{ textAlign: "center", width: "100%", padding: "20px" }}>no tasks to display</em>
        )}
      </ul>
      <div className='action flex justify-between align-center'>
        <div className='task-counter'>
          <p>{`${taskCounter} items left`}</p>
        </div>
        <Views />
        <button>Clear Completed</button>
      </div>
    </section>
  );
}

export default Section;
