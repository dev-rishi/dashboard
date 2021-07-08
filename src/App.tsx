import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import MainLayout from './layouts/MainLayout/MainLayout'

function App() {
  return (
    <RecoilRoot>
      <Router>
        <MainLayout />
      </Router>
    </RecoilRoot>
  )
}

export default App
