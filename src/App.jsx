import Header from './components/layout/Header'
import Banner from './components/sections/Banner'
import Education from './components/sections/Education'
import Experience from './components/sections/Experience'
import Certifications from './components/sections/Certifications'
import Projects from './components/sections/Projects'
import Hobbies from './components/sections/Hobbies'
import Contact from './components/sections/Contact'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <main className="pt-16">
        <Banner />
        <Education />
        <Experience />
        <Certifications />
        <Projects />
        <Hobbies />
        <Contact />
      </main>
    </div>
  )
}

export default App
