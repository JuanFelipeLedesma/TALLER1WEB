import { useMemo, useState } from 'react'

export default function Reto1_Progress(){
  const [pct,setPct]=useState(10)
  const v=useMemo(()=>Math.max(0,Math.min(100,Number(pct)||0)),[pct])

  return (
    <div className="container center">
      <div className="surface" style={{maxWidth:520,width:'100%'}}>
        <div className="toolbar">
          <div className="row" style={{gap:8}}>
            <div className="badge">Reto 1</div>
            <div className="muted">Progress bar controlado por input</div>
          </div>
        </div>

        <div className="pbar" style={{margin:'24px 0 16px 0'}}>
          <div className="pfill" style={{width:`${v}%`}} />
          <div className="pbubble" style={{left:`${v}%`}}>{v}%</div>
        </div>

        <div className="row" style={{gap:12,justifyContent:'center'}}>
          <div className="muted">Input Percentage:</div>
          <input
            className="input"
            style={{width:120,textAlign:'center',fontWeight:700}}
            type="number"
            min="0"
            max="100"
            step="1"
            value={pct}
            onChange={e=>setPct(e.target.value)}
            onBlur={()=>setPct(String(v))}
          />
        </div>
      </div>
    </div>
  )
}
