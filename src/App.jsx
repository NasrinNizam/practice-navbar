
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './App.css'
import { Navbar } from './Components/Navbar'
import { Dashboard } from './Pages/Dashboard'
import { Revenue } from './Pages/Revenue'
import { Notifications } from './Pages/Notifications'
import { Analytics } from './Pages/Analytics'
import { Inventory } from './Pages/Inventory'
import { LayoutOne } from './Layouts/LayoutOne'

function App() {
const route =createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne/>}>
         <Route index element={<Dashboard/>}/>
         <Route path='/revenue' element={<Revenue/>}/>
         <Route path='/notifications' element={<Notifications/>}/>
         <Route path='/analytics' element={<Analytics/>}/>
         <Route path='/inventory' element={<Inventory/>}/>
      </Route>
    </Route>
  )
)
  return (
    <>
      <RouterProvider router={route}/>
    </>
  )
}

export default App
