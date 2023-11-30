import {React,useState} from 'react'
// custom hooks
// import useLocalStorage from '../../../src/hooks/useLocalStorage';
import useLocalStorage from "../../hooks/useLocalStorage";

// Secondary hooks -------------------------------

// custom components
// import CustomForm from '../ThemeModules/CustomForm'
// import EditForm from "../ThemeModules/EditForm";
// import TaskList from "../ThemeModules/TaskList";
// Main Imports --------------------------------
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routes from '../../routes/Routers'

import AdminNav from '../../admin/AdminNav'
import { useLocation } from 'react-router-dom'
import ThemeSwitcher from '../ThemeModules/ThemeSwitcher';
function Layout ()  {
  
  // const [tasks, setTasks] = useLocalStorage('react-todo.tasks', []);
  // const [previousFocusEl, setPreviousFocusEl] = useState(null);
  // const [editedTask, setEditedTask] = useState(null);
  // const [isEditing, setIsEditing] = useState(false);

  // const addTask = (task) => {
  //   setTasks(prevState => [...prevState, task])
  // }

  // const deleteTask = (id) => {
  //   setTasks(prevState => prevState.filter(t => t.id !== id));
  // }

  // const toggleTask = (id) => {
  //   setTasks(prevState => prevState.map(t => (
  //     t.id === id
  //       ? { ...t, checked: !t.checked }
  //       : t
  //   )))
  // }

  // const updateTask = (task) => {
  //   setTasks(prevState => prevState.map(t => (
  //     t.id === task.id
  //       ? { ...t, name: task.name }
  //       : t
  //   )))
  //   closeEditMode();
  // }

  // const closeEditMode = () => {
  //   setIsEditing(false);
  //   previousFocusEl.focus();
  // }

  // const enterEditMode = (task) => {
  //   setEditedTask(task);
  //   setIsEditing(true);
  //   setPreviousFocusEl(document.activeElement);
  // }


  const location = useLocation()
  return (
    <>
      {location.pathname.startsWith("/dashboard") ? <AdminNav /> : <Header />}
      {/* <div className="container">
        <header>
          <h1 className='classATheme'>My Task List</h1>
        </header>
        {isEditing && (
          <EditForm
            editedTask={editedTask}
            updateTask={updateTask}
            closeEditMode={closeEditMode}
          />
        )}
        <CustomForm addTask={addTask} />
        {tasks && (
          <TaskList
            tasks={tasks}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enterEditMode={enterEditMode}
          />
        )}
      </div> */}
      <div>
        <Routes />
      </div>
      <Footer />
        <ThemeSwitcher />
    </>
  );
};

export default Layout