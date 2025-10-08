import UnifiedNavbar from '../components/UnifiedNavbar'
import LeftSearch from '../components/LeftSearch'
import LinksBar from '../components/LinksBar'

export default function Reto5_Navbar(){
  return (
    <div className="container">
      <div className="surface">
        <div className="toolbar">
          <div className="row" style={{gap:8}}>
            <div className="badge">Reto 5</div>
            <div className="muted">Arriba: 1 componente. Abajo: 2 componentes.</div>
          </div>
        </div>
        <UnifiedNavbar/>
        <hr/>
        <div className="navbar" style={{justifyContent:'space-between'}}>
          <LeftSearch/>
          <LinksBar/>
        </div>
      </div>
    </div>
  )
}
