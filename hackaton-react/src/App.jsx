import { Route, Routes, Link } from 'react-router-dom'
import Home from './pages/home'
import Reto1_Progress from './pages/Reto1_Progress'
import Reto2_ClickTimer from './pages/Reto2_ClickTimer'
import Reto3_TicTacToe from './pages/Reto3_TicTacToe'
import Reto4_DarkMode from './pages/Reto4_DarkMode'
import Reto5_Navbar from './pages/Reto5_Navbar'
import Reto6_TextAnalyzer from './pages/Reto6_TextAnalyzer'
import Reto7_Quotes from './pages/Reto7_Quotes'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/reto1" element={<Reto1_Progress/>} />
      <Route path="/reto2" element={<Reto2_ClickTimer/>} />
      <Route path="/reto3" element={<Reto3_TicTacToe/>} />
      <Route path="/reto4" element={<Reto4_DarkMode/>} />
      <Route path="/reto5" element={<Reto5_Navbar/>} />
      <Route path="/reto6" element={<Reto6_TextAnalyzer/>} />
      <Route path="/reto7" element={<Reto7_Quotes/>} />
      <Route path="*" element={
        <div className="container center">
          <div className="surface">
            <div className="big" style={{fontSize:28}}>Ruta no encontrada</div>
            <div style={{marginTop:10}}><Link className="btn" to="/">Volver al inicio</Link></div>
          </div>
        </div>
      }/>
    </Routes>
  )
}
