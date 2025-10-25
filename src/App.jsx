import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-neutral-800 text-white py-8">
        <div className="container-max-width section-padding">
          <div className="text-center">
            <p className="text-neutral-400 mb-2">
              © 2025 Desarrollador Full Stack. Todos los derechos reservados.
            </p>
            <p className="text-neutral-500 text-sm">
              Desarrollado con React, Tailwind CSS y mucho ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
