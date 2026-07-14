import Sidebar from './components/Sidebar'
import './styles/layout.css'
import About from './components/About'
import Formazione from './components/Formazione'
import Progetti from './components/Progetti'
import Stack from './components/Stack'
import Contatti from './components/Contatti'

function App() {
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