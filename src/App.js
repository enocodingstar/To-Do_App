import Header from './components/header';
import Input from './components/input';
import Section from './components/section';
import './styles/App.scss'


function App() {
  return (
    <div className='app light-mode'>
      <Header />
      <main>
        <Input />
        <Section />
      </main>
    </div>
  );
}

export default App;
