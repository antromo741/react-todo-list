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

    const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id))
    }

  return (
    <div className="container">
    <Header />
    {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : ('No tasks to show') }
    </div>
  );
}

export default App;
