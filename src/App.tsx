import Sidebar from './components/Sidebar'
import './styles/layout.css'
import About from './components/About'
import Formazione from './components/Formazione'
import Progetti from './components/Progetti'
import Stack from './components/Stack'
import Contatti from './components/Contatti'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language.startsWith('en') ? 'en' : 'it'
  }, [i18n.language]);
  
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <About />
        <Formazione />
        <Progetti />
        <Stack />
        <Contatti />

      </main>
    </div>
  )
}

export default App