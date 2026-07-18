import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './shared/layout/DefaultLayout'
import HomePage from './features/home/pages/HomePage'
import RentSearch from './features/rent/components/RentSearch'
import BuySearch from './features/buy/components/BuySearch'

function App() {

  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="rent/" element={<RentSearch />}></Route>
          <Route path="buy/" element={<BuySearch />}></Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
