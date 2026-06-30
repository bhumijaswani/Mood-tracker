import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Landing from './Pages/Landing'
import Home from './Pages/Home'
import History from './Pages/History'
import Insights from './Pages/Insights'
import SelfCare from './Pages/SelfCare'

function AppContent() {
  const location = useLocation()
  const isLanding = location.pathname === '/'

  return (
    <>
      {!isLanding && <Header />}
      <Routes>
        <Route path="/"         element={<Landing />} />
        <Route path="/home"     element={<Home />} />
        <Route path="/history"  element={<History />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/selfcare" element={<SelfCare />} />
      </Routes>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App