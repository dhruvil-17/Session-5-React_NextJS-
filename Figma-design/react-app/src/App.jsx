import React from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services/Services'
import Team from './components/Team'
import Projects from './components/Projects'
import Clients from './components/Clients'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <Nav />
      <main className="pt-6">
        <Hero />
        <About />
        <Services />
        <Team />
        <Projects />
        <Clients />
      </main>
      <Footer />
    </div>
  )
}