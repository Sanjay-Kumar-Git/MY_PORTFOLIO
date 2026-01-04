import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"

import Context from "./Context"
import Home from "./components/Home"
import About from "./components/About"
import ProjectsSection from "./components/Projects"
import ContactSection from "./components/Contact"
import Notfound from "./components/Notfound"

import { GlobalScrollbar } from "./StyledComponents"

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme-mode")
    return savedTheme !== null ? JSON.parse(savedTheme) : false
  })

  useEffect(() => {
    localStorage.setItem("theme-mode", JSON.stringify(isDark))
  }, [isDark])

  const changeToDark = () => {
    setIsDark(prevDark => !prevDark)
  }

  return (
    <Context.Provider
      value={{
        dark: isDark,
        changeToDark: changeToDark
      }}
    >
      <GlobalScrollbar $dark={isDark} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsSection />} />
        <Route path="/contact" element={<ContactSection />} />

        {/* NOT FOUND PAGE */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Context.Provider>
  )
}

export default App
