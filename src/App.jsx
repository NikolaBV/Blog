import './App.css'
import TopNav from "./components/TopNav"
import Home from "./components/Home"
import Blog from "./components/Blog"
import UserDetails from "./components/UserDetails"

import {Route, Routes } from "react-router-dom"
function App() {


  return (
    <>
          <TopNav></TopNav>
          <div className="container">
              <Routes>
                  <Route path="/" element={<Home></Home>}></Route>
                  <Route path="/blog" element={<Blog></Blog>}></Route>
                  <Route path="/userDetails" element={<UserDetails></UserDetails>}></Route>
              </Routes>
          </div>
    </>
  )
}

export default App
