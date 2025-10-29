import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import rout from './Routs/Routs'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={rout} />
  </StrictMode>,
)
