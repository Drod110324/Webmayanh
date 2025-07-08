import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import DefaultComponent from './components/DefaultComponent/DefaultComponent.jsx'
import { Fragment } from 'react/jsx-runtime'

function App() {
  return(
  <div>
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          const Page = route.page
          const Default = route.isShowHeader ? DefaultComponent : Fragment
          return <Route path={route.path} element={<Default><Page /></Default>} key={route.path} />
        })} 
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;