import React from 'react';
import Views from './views';

function Section() {
  return (
    <section>
        <ul className='task-list'>
          <em style={{textAlign: "center", width: "100%", padding: "20px"}}>no tasks to display</em>
        </ul>
        <div className='action flex justify-between align-center'>
            <div className='task-counter'>
                <p>0 items left</p>
            </div>
            <Views />
            <button>Clear Completed</button>
        </div>
    </section>
  )
}

export default Section