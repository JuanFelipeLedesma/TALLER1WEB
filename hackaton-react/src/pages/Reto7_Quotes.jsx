import { useMemo, useState } from 'react'

const QUOTES=[
  {text:'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',author:'Albert Schweitzer'},
  {text:'The only way to do great work is to love what you do.',author:'Steve Jobs'},
  {text:'Perseverance is not a long race; it is many short races one after the other.',author:'Walter Elliot'},
  {text:'It always seems impossible until it is done.',author:'Nelson Mandela'},
  {text:'Quality is not an act, it is a habit.',author:'Aristotle'},
  {text:'The secret of getting ahead is getting started.',author:'Mark Twain'},
  {text:'What we think, we become.',author:'Buddha'}
]

export default function Reto7_Quotes(){
  const [idx,setIdx]=useState(0)
  const q=QUOTES[idx]
  function next(){setIdx(i=>(i+1)%QUOTES.length)}
  function prev(){setIdx(i=>(i-1+QUOTES.length)%QUOTES.length)}
  function random(){setIdx(Math.floor(Math.random()*QUOTES.length))}
  const share=useMemo(()=>{
    const u=encodeURIComponent(`"${q.text}" — ${q.author}`)
    return {
      tw:`https://twitter.com/intent/tweet?text=${u}`,
      wa:`https://wa.me/?text=${u}`
    }
  },[q])

  return (
    <div className="container">
      <div className="surface">
        <div className="toolbar">
          <div className="row" style={{gap:8}}>
            <div className="badge">Reto 7</div>
            <div className="muted">Generador de quotes</div>
          </div>
          <div className="row" style={{gap:8}}>
            <button className="btn ghost" onClick={random}>Aleatorio</button>
          </div>
        </div>
        <div className="quote" style={{background:'#0d1322',padding:24,borderRadius:12,border:'1px solid rgba(255,255,255,.06)'}}>
          “{q.text}”
          <div style={{marginTop:10,opacity:.85}}>— {q.author}</div>
        </div>
        <div className="row" style={{gap:10,marginTop:14}}>
          <button className="btn ghost" onClick={prev}>Anterior</button>
          <button className="btn" onClick={next}>Siguiente</button>
          <div className="spacer"></div>
          <div className="footshare">
            <a className="btn ghost" href={share.tw} target="_blank" rel="noreferrer">Compartir Twitter</a>
            <a className="btn ghost" href={share.wa} target="_blank" rel="noreferrer">Compartir WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  )
}
