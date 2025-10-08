import { useEffect, useState } from 'react'

export default function Reto4_DarkMode(){
  const key='dark-mode'
  const [on,setOn]=useState(()=>localStorage.getItem(key)==='1')

  useEffect(()=>{
    if(on){
      document.documentElement.style.setProperty('--bg','#0f172a')
      document.body.style.background='linear-gradient(160deg,#0b1220,#0a0f1c 60%)'
      localStorage.setItem(key,'1')
    }else{
      document.documentElement.style.setProperty('--bg','#f4f4f5')
      document.body.style.background='linear-gradient(160deg,#f4f4f7,#e9ecf3 60%)'
      localStorage.setItem(key,'0')
    }
  },[on])

  return (
    <div className="container center">
      <div className="surface" style={{maxWidth:420,width:'100%'}}>
        <div className="toolbar">
          <div className="row" style={{gap:8}}>
            <div className="badge">Reto 4</div>
            <div className="muted">Dark Mode</div>
          </div>
          <div className={on?'switch on':'switch'} onClick={()=>setOn(v=>!v)}>
            <div className="dot"></div>
          </div>
        </div>
        <div className="center" style={{padding:'30px 0'}}>Toggle para cambiar el tema. Se guarda en localStorage.</div>
      </div>
    </div>
  )
}
