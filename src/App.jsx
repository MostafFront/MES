import './App.css'

import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'

import AddCataloge from './Components/AddCataloge/AddCataloge'
import Dashboard from './Components/Dashboard/Dashboard'
import LayOut from './Components/LayOut/LayOut'
import LogIn from './Components/LogIn/LogIn'
import MachinesHistory from './Components/MachinesHistory/MachinesHistory'
import MachinesInformation from './Components/MachinesInformation/MachinesInformation'
import MachinesStatistics from './Components/MachinesStatistics/MachinesStatistics'
import ManufacturingFlow from './Components/ManufacturingFlow/ManufacturingFlow'
import ManufacturingJob from './Components/ManufacturingJob/ManufacturingJob'
import ManufacturingProcess from './Components/ManufacturingProcess/ManufacturingProcess'
import ManufacturingRoutes from './Components/ManufacturingRoutes/ManufacturingRoutes'
import ResourcesConsumption from './Components/ResourcesConsumption/ResourcesConsumption'
import ResourcesProduct from './Components/ResourcesProduct/ResourcesProduct'
import ResourcesSupply from './Components/ResourcesSupply/ResourcesSupply'
import ResourcesTimeLine from './Components/ResourcesTimeLine/ResourcesTimeLine'
import ResourcesWeight from './Components/ResourcesWeight/ResourcesWeight'
import { useState } from 'react'
import ViewProperties from './Components/ViewProperties/ViewProperties'
import Planning from './Components/Planning/Planning'
import NotFound from './Components/NotFounded/NotFounded'
function App() {
  const [count, setCount] = useState(0)

  const x = createBrowserRouter(
  [
    {path:"" ,element:<LayOut/> ,children:[
      {index: true , element:<LogIn/>},
      {path: 'Dashboard' , element:<Dashboard/>},
      {path: 'ResourcesTimeLine' , element:<ResourcesTimeLine/>},
      {path: 'ResourcesConsumption' , element:<ResourcesConsumption/>},
      {path: 'ResourcesProduct' , element:<ResourcesProduct/>},
      {path: 'ResourcesSupply' , element:<ResourcesSupply/>},
      {path: 'ResourcesWeight' , element:<ResourcesWeight/>},
      {path: 'AddCataloge' , element:<AddCataloge/>},
      {path: 'ViewProperties' , element:<ViewProperties/>},
      {path: 'ManufacturingFlow' , element:<ManufacturingFlow/>},
      {path: 'ManufacturingJob' , element:<ManufacturingJob/>},
      {path: 'ManufacturingProcess' , element:<ManufacturingProcess/>},
      {path: 'ManufacturingRoutes' , element:<ManufacturingRoutes/>},
      {path: 'MachinesInformation' , element:<MachinesInformation/>},
      {path: 'MachinesStatistics' , element:<MachinesStatistics/>},
      {path: 'MachinesHistory' , element:<MachinesHistory/>},
      {path: 'Planning' , element:<Planning/>},
      { path: '*', element: <NotFound /> },
    ]}
  ]
  )
  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
