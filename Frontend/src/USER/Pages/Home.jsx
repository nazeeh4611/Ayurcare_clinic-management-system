import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Cards from '../Components/Cards'
import Speciality from '../Components/Speciality'
import Unique from '../Components/Unique'
import { Package } from 'lucide-react'
import Packages from './Package'

function Home() {
  return (
      <>
      <Navbar/>
    <Hero/>
    <Unique/>
    <Speciality/>
    </>
  )
}

export default Home