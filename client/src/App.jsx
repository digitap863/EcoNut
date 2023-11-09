import React, { Suspense, lazy } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
const Contact = lazy(() => import('./pages/Contact'))
const Products = lazy(() => import('./pages/Products'))
const Community = lazy(() => import('./pages/Community'))
const About = lazy(() => import('./pages/About'))

const FallbackUI = () => <div className="preloader loaded-success fixed top-0 inset-0  bg-opacity-30 z-50">
  <div className="absolute left-[35%] md:left-[46%] top-1/2 transform -translate-y-1/2">
    <div className="relative mx-auto my-12">
      <div className="inline-block">
        <span className="relative flex h-10 items-center justify-center w-full">
          <span className="animate-ping absolute inline-flex h-20  w-20 rounded-full bg-black opacity-20" />
          <h1 className='font-extrabold font-raleway text-2xl'>EcoNut</h1>
        </span>
      </div>
    </div>
  </div>
</div>;

function App() {

  return (
    <BrowserRouter>
      <div className='overflow-hidden'>
        {/* <ScrollToTopOnNavigate/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Suspense fallback={<FallbackUI />}><About /></Suspense>} />
          <Route path="/products" element={<Suspense fallback={<FallbackUI />}><Products /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<FallbackUI />}><Contact /></Suspense>} />
          <Route path="/community" element={<Suspense fallback={<FallbackUI />}><Community /></Suspense>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
