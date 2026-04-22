import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'
import ToDoList from './ToDoList.jsx'
import Api from './Api.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Api/>
  </StrictMode>,
)
