import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setshowAddTask] = useState(false)
  const [tasks, settasks] = useState([{
    id: 1,
    text: "Doctor's Appointment",
    day: 'feb 5th at 2:30pm',
    reminder: true,
  }, {
    id: 2,
    text: "meet a friend",
    day: 'feb 6th at 2:30pm',
    reminder: true,
  }, {
    id: 3,
    text: "interview call",
    day: 'feb 7th at 2:30pm',
    reminder: true,
  }, {
    id: 4,
    text: "take dog to the vet",
    day: 'feb 8th at 2:30pm',
    reminder: true,
  }])

  const deleteTask = (id) => {
    settasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    settasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 4
    const newTask = { id, ...task }
    settasks([...tasks, newTask])
  }
  return (
    <div className="container">
      <Header onAdd={() => setshowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
