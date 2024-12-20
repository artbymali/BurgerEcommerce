import { useState, useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Lenis from "lenis";
import Home from './Pages/Home/Home'
import ProductPage from './Pages/ProductPage/ProductPage'
import { BasketProvider } from './CartContext'
import Cart from './Pages/Cart/Cart'
// import Blog from './Pages/Blog/Blog';
import BlogRecever from './Pages/Blog/BlogRecever';

function App() {

  // Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.009 - Math.pow(2, -11 * t)),
    });

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Home/>
        </>
      )
    },
    {
      path: '/products/:id',
      element: (
        <>
          <ProductPage/>
        </>
      )
    },
    {
      path: '/Blog',
      element: (
        <BlogRecever/>
      )
    },
    {
      path: "/Cart",
      element: (
        <>
          <Cart/>
        </>
      )
    }
  ])

  return (
    <>
    <BasketProvider>
      <RouterProvider router={router}/>
      </BasketProvider>
    </>
  )
}

export default App
