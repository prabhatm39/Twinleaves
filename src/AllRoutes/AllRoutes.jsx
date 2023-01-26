import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Detalies } from '../Pages/Detalies'
import { Home } from '../Pages/Home'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/:id' element={<Detalies />} />
        </Routes>
    </div>
  )
}
