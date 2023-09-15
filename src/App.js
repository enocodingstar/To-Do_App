import React, { useState } from 'react';
import Header from './components/header';
import Input from './components/input';
import Section from './components/section';
import './styles/App.scss';




function App() {
  const [appTheme, setAppTheme] = useState('light-mode');
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');

  const toggleAppTheme = (theme) => {
    setAppTheme(theme);
  };

  const handleDeleteClick = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  return (
       <div className={`app ${appTheme}`}>
      <Header  appTheme={appTheme} toggleAppTheme={toggleAppTheme}/>
      <main>
        <Input tasks={tasks} setTasks={setTasks} taskName={taskName} setTaskName={setTaskName}/>
        <Section tasks={tasks} taskName={taskName} handleDeleteClick={handleDeleteClick}/>
      </main>
    </div>
  );
}

export default App;

