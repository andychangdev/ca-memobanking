import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BaseLayout, Homepage, About, Contact, PageNotFound } from './pages'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
