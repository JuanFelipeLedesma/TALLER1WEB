import { useEffect, useRef, useState } from 'react'

export default function Reto2_ClickTimer(){
  const DURATION=10
  const [time,setTime]=useState(DURATION)
  const [count,setCount]=useState(0)
  const [running,setRunning]=useState(false)
  const iv=useRef(null)

  useEffect(()=>{
    if(running){
      iv.current=setInterval(()=>setTime(t=>t-1),1000)
    }
    return ()=>clearInterval(iv.current)
  },[running])

  useEffect(()=>{
    if(time<=0){
      clearInterval(iv.current)
      setRunning(false)
    }
  },[time])

  function start(){
    setCount(0)
    setTime(DURATION)
    setRunning(true)
  }

  return (
    <div className="container center">
      <div className="surface" style={{maxWidth:420,width:'100%'}}>
        <div className="toolbar">
          <div className="row" style={{gap:8}}>
            <div className="badge">Reto 2</div>
            <div className="muted">Clicks hasta que acabe el tiempo</div>
          </div>
          <button className="btn ghost" onClick={start}>Iniciar</button>
        </div>
        <div className="center" style={{padding:'26px 0'}}>
          <div className="big">{count}</div>
          <div className="muted timer">Tiempo: {time}s</div>
        </div>
        <button className="btn full" disabled={!running||time<=0} onClick={()=>setCount(c=>c+1)}>Sumar</button>
        <hr/>
        <div className="row" style={{justifyContent:'space-between'}}>
          <div className="muted">Estado: {running? 'Corriendo':'Detenido'}</div>
          <div className="muted">Tiempo total: 10s</div>
        </div>
      </div>
    </div>
  )
}
