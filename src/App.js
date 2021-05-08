import Header from './components/Header'
import { useState } from 'react'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Hey ImData',
      day: '08/26/1996',
      reminder: false,
    },
    {
      id: 2,
      text: 'Hey ImAlsoData',
      day: '12/28/1995',
      reminder: true,
    },
    {
      id: 3,
      text: 'Hey ImDataTooIguess',
      day: '420',
      reminder: false,
    },

  ])
  return (
    <div className="container">
    <Header />
    <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
