import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { NotFound } from '@/pages/NotFound'
import { ThemeProvider } from '@/contexts/ThemeContext'

export const App = () => (
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
)
