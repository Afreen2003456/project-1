import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PortfolioProvider } from './contexts/PortfolioContext'
import { PropertyProvider } from './contexts/PropertyContext'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import TemplateSelector from './pages/TemplateSelector'
import PortfolioBuilder from './pages/PortfolioBuilder'
import PortfolioPreview from './pages/PortfolioPreview'
import PropertyListing from './pages/PropertyListing'

function App() {
  return (
    <ThemeProvider>
      <PropertyProvider>
        <PortfolioProvider>
          <Router>
            <div className="App">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/property-listing" element={<PropertyListing />} />
                <Route path="/templates" element={<TemplateSelector />} />
                <Route path="/builder" element={<PortfolioBuilder />} />
                <Route path="/preview" element={<PortfolioPreview />} />
              </Routes>
            </div>
          </Router>
        </PortfolioProvider>
      </PropertyProvider>
    </ThemeProvider>
  )
}

export default App 