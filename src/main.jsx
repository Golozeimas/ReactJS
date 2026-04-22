import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App.jsx'
import App2 from './pages/App2.jsx'
import ToDoList from './pages/ToDoList.jsx'
import Api from './pages/Api.jsx'
import AppRoutes from "./routes/AppRoutes.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes/>
  </StrictMode>,
)
