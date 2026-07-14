import Sidebar from './components/Sidebar'
import './styles/layout.css'
import About from './components/About'
import Formazione from './components/Formazione'

function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="main">
        <About />
        <Formazione />
      </main>
    </div>
  )
}

export default App