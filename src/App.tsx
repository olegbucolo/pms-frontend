import { Routes, Route } from 'react-router-dom'
import DefaultLayout from './shared/layout/DefaultLayout'
import HomePage from './features/home/pages/HomePage'
import RentSearch from './features/rent/components/BrowsingSearch'
import BuySearch from './features/buy/components/BuySearch'
import BrowsingLayout from './shared/layout/BrowsingLayout'
import BrowsingPage from './features/pages/BrowsingPage'
import ListingDetailsPage from './features/listing/pages/ListingDetailPage'

function App() {

  return (
    <>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path="/search" element={<BrowsingLayout />}>
          <Route index element={<BrowsingPage />} />
          <Route path=":id" element={<ListingDetailsPage />} />
        </Route>

      </Routes>
    </>
  )
}

export default App
