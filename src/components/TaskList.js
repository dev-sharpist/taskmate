import { useState } from 'react';
export const TaskList = () => {
      const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1', isCompleted: false },
    { id: 2, text: 'Task 2', isCompleted: true },
    { id: 3, text: 'Task 3', isCompleted: false }
  ]);
  const [show, setShow] = useState(true);
  return (
      <ul>
            <button className='toggle' onClick={() => setShow(!show)}>
        {show ? "Hide list" : "Show list"} </button>
        {show && (
            <div className='taskList'>
        {tasks.length === 0 && <p className='noTasks'>No tasks available</p>}
        {tasks.map(task => (
          <li key={task.id} className={task.isCompleted ? 'completed' : ''}>
            <span>{task.id} - {task.text}</span>
            <div className='actions'>
              <input
                type='checkbox'
                className='checkbox'
                checked={task.isCompleted}
                onChange={() => {
                  setTasks(tasks.map(t =>
                    t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t
                  ));
                }}
              />
              <button className='delete' 
              onClick={()=>{
                setTasks(tasks.filter(t => t.id !== task.id));
              }}>Delete</button>
            </div>
          </li>
        ))}
    </div>
)}
      </ul>
  )
}
