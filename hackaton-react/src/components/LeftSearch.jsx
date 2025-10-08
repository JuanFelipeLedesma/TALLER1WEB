import { useState } from 'react'

export default function LeftSearch(){
  const [q,setQ]=useState('')
  function search(){alert('Buscar: '+q)}
  return (
    <div className="row" style={{gap:8}}>
      <button className="btn ghost" onClick={search}>Search</button>
      <input className="input" style={{width:380}} placeholder="Search" value={q} onChange={e=>setQ(e.target.value)}/>
    </div>
  )
}
