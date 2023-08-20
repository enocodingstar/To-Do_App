import React from 'react'

function Input() {
  return (
    <div className='input-container'>
        <div className='check'>
            <input type='checkbox' name='addnew' id='addnew'></input>
            <label htmlFor='addnew'></label>
        </div>
        <input type='text' placeholder='Add new task...'></input>
    </div>
  )
}

export default Input