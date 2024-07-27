import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BaseLayout, HomePage, AboutPage, ContactPage, PageNotFound } from './pages'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
