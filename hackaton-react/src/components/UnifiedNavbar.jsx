import { useState } from 'react'

export default function UnifiedNavbar(){
  const [q,setQ]=useState('')
  function search(){alert('Buscar: '+q)}
  return (
    <div className="navbar">
      <div style={{fontWeight:700}}>Navbar</div>
      <div className="row" style={{gap:14}}>
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
      </div>
      <div className="spacer"></div>
      <div className="search">
        <input className="input" style={{width:360}} placeholder="Search" value={q} onChange={e=>setQ(e.target.value)}/>
        <button className="btn" onClick={search}>Search</button>
      </div>
    </div>
  )
}
