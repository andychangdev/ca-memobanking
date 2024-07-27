import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { BaseLayout, AuthLayout, HomePage, AboutPage, ContactPage, PageNotFound, SignUpPage, LoginPage } from './pages'

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

          <Route path="/" element={<AuthLayout />}>
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
          
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
