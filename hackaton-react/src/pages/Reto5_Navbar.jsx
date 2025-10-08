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
            <div className="muted">Arriba: Normal. Abajo: Invertido.</div>
          </div>
        </div>
        <UnifiedNavbar/>
        <hr/>
        <div className="navbar mirror" style={{justifyContent:'space-between', flexDirection:'row-reverse'}}>
          <LeftSearch/>
          <LinksBar/>
        </div>
      </div>
    </div>
  )
}
