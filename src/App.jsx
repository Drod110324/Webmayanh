import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { routes } from './routes'
import HeaderComponent from './components/HeaderComponent/HeaderComponent'

function App() {
  return(
  <div>
    <HeaderComponent />
    <BrowserRouter>
      <Routes>
      {routes.map((route) => {
        const Page = route.page
        return <Route path={route.path} element={<Page />} key={route.path} />
      })}
      </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;