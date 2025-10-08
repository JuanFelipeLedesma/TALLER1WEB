import NavLinkButton from '../components/NavLinkButton'
import { Link } from 'react-router-dom'

export default function Home(){
  return (
    <div className="container">
      <div className="header">
        <div className="brand">
          <span style={{fontSize:20}}>Hackatón React</span>
          <span className="badge">Index</span>
        </div>
        <div className="row">
          <Link to="/reto4" className="btn ghost">Dark Mode</Link>
        </div>
      </div>

      <div className="surface" style={{marginBottom:16}}>
        <div className="row" style={{justifyContent:'space-between'}}>
          <div className="row" style={{gap:8}}>
            <div className="badge">UX</div>
            <div className="badge">Responsive</div>
            <div className="badge">Router</div>
          </div>
          <div className="muted">Selecciona un reto</div>
        </div>
      </div>

      <div className="grid">
        <NavLinkButton to="/reto1" title="Reto 1: Progress Bar" subtitle="Controlado por input 0–100%" />
        <NavLinkButton to="/reto2" title="Reto 2: Clicks con temporizador" subtitle="Cuenta clics en 10s con reset" />
        <NavLinkButton to="/reto3" title="Reto 3: Ta-te-tí básico" subtitle="Alternar X y O sin chequeo de victoria" />
        <NavLinkButton to="/reto4" title="Reto 4: Dark Mode" subtitle="Toggle con persistencia" />
        <NavLinkButton to="/reto5" title="Reto 5: Navbar + Buscador" subtitle="Versión 1 componente y 2 componentes" />
        <NavLinkButton to="/reto6" title="Reto 6: Text Analyzer" subtitle="Words, chars, sentences, paragraphs" />
        <NavLinkButton to="/reto7" title="Reto 7: Quotes aleatorias" subtitle="Anterior, siguiente y compartir" />
      </div>
    </div>
  )
}
