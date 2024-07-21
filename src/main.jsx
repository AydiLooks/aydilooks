import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './context/productcontext.jsx'
import { ThemeProvider } from './context/Themecontext.jsx'
import { FilterContextProvider } from './context/filtercontext.jsx'
import { CartProvider } from './context/cardcontext.jsx'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary.jsx'
import { AuthProvider } from './utills/CheckAuth.jsx'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import './tailwind.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
   
   
      <AppProvider>
        <FilterContextProvider>
          <CartProvider>
          <AuthProvider>
            <ErrorBoundary>
            <App />
            {/* <Router> */}
      {/* <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<App />} />
      </Routes>
    </Router> */}
    </ErrorBoundary>
    </AuthProvider>
          </CartProvider>
        </FilterContextProvider>
      </AppProvider>

    </ThemeProvider>

  </React.StrictMode>
)
