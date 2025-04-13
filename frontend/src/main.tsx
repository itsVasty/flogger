import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App page="home" />,
  },
  {
    path: "/posts",
    element: <App page="posts"/>
  },
  {
    path: "/posts/:post_id",
    element: <App page="posts"/>
  },
  {
    path: "/",
    loader: () => redirect("/home"),
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

