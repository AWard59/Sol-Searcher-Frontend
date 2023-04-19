import React from "react";
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Profile from './Profile'
import Match from './Match'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/match" element={<Match />} />
    </Routes>
  )
}

export default AppRoutes;