import {Header} from './components/Header';
import {TaskList} from './components/TaskList';
import {Footer} from './components/Footer';// Compare this snippet from src/components/HeaderFooter.js:
import './App.css';

export default function App() {

  return (
    <div className='App'>
      <Header/>
      <TaskList />
      <Footer />
    </div>
  )
}


