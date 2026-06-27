import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './shared/layout/DefaultLayout'
import HomePage from './features/home/pages/HomePage'

function App() {

  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
