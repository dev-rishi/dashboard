import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import GlobalSearchProvider from './context/GlobalSearchProvider'
import MainLayout from './layouts/MainLayout/MainLayout'

function App() {
  return (
    <RecoilRoot>
      <GlobalSearchProvider>
        <Router>
          <MainLayout />
        </Router>
      </GlobalSearchProvider>
    </RecoilRoot>
  )
}

export default App
