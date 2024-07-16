import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Components/Navbar'

export const LayoutOne = () => {
  return (
    <>
    <div className="flex">
    <Navbar/>
    <Outlet/>
    </div>
    </>
  )
}
