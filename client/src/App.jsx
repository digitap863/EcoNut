import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
// const BlogDetails = lazy(() => import('./pages/BlogDetails'))

// const FallbackUI = () => <div className="preloader loaded-success fixed top-0 inset-0  bg-opacity-30 z-50">
//   <div className="absolute left-[35%] md:left-[46%] top-1/2 transform -translate-y-1/2">
//     <div className="relative mx-auto my-12">
//       <div className="inline-block">
//         <span className="relative flex h-10 items-center justify-center w-full">
//           <span className="animate-ping absolute inline-flex h-20  w-20 rounded-full bg-black opacity-20" />
//           <img className='relative animate-bounce inline-flex rounded-full h-20 w-20' src={logo} alt="" />
//         </span>
//       </div>
//     </div>
//   </div>
// </div>;

function App() {

  return (
    <BrowserRouter>
    <div className='overflw-hidden'>
      {/* <ScrollToTopOnNavigate/> */}
    <Routes>
      <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<Suspense fallback={<FallbackUI />}><About /></Suspense>} />
        <Route path="/service" element={<Suspense fallback={<FallbackUI />}><Services /></Suspense>} />
        <Route path="/showcase" element={<Suspense fallback={<FallbackUI />}><ShowcasePage /></Suspense>} />
        <Route path="/blogs" element={<Suspense fallback={<FallbackUI />}><BlogsPage /></Suspense>} />
        <Route path="/blog-details" element={<Suspense fallback={<FallbackUI />}><BlogDetails /></Suspense>} />
        <Route path="/service-details" element={<Suspense fallback={<FallbackUI />}><ServicesDetails /></Suspense>} /> */}
    </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
