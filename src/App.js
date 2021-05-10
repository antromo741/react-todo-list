import Header from './components/Header'
import { useState } from 'react'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

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

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">

    <Header 
      onAdd={() => setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}
    />

    {showAddTask && <AddTask onAdd={addTask} />}

    {tasks.length > 0 ? (
    <Tasks tasks={tasks} 
    onDelete={deleteTask} 
    onToggle={toggleReminder} />
    ) : (
      'No tasks to show'
      )}
    </div>
  );
}

export default App;
