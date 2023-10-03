

function Views({ currentView, setCurrentView }) {

  return (
    <div className='views flex align-center justify-center'>
      <button
        className={currentView === 'all' ? 'active' : ''}
        onClick={() => setCurrentView('all')}>
        All
      </button>
      <button
        className={currentView === 'active' ? 'active' : ''}
        onClick={() => setCurrentView('active')}>
        Active
      </button>
      <button
        className={currentView === 'completed' ? 'active' : ''}
        onClick={() => setCurrentView('completed')}>
        Completed
      </button>
    </div>
  )
}

export default Views