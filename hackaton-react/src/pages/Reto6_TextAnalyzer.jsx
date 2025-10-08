import { useMemo, useState } from 'react'

export default function Reto6_TextAnalyzer(){
  const [text,setText]=useState('')

  const stats=useMemo(()=>{
    const t=text.trim()
    const words=t? t.split(/\s+/).length:0
    const chars=text.length
    const sentences=t? t.split(/[.!?]+(?:\s|$)/).filter(x=>x.trim().length>0).length:0
    const paragraphs=t? t.split(/\n{2,}|(?:\r?\n){1,}/).filter(x=>x.trim().length>0).length:0

    const longestWord=(()=>{
      if(!t) return ''
      const tokens=t.split(/\s+/)
        .map(w=>w.replace(/[^\p{L}\p{N}-]/gu,''))
        .filter(w=>w.length>0)
      if(tokens.length===0) return ''
      return tokens.reduce((a,b)=>b.length>a.length?b:a,tokens[0])
    })()

    return {words,chars,sentences,paragraphs,longestWord}
  },[text])

  return (
    <div className="container">
      <div className="surface">
        <div className="toolbar">
          <div className="row" style={{gap:8}}>
            <div className="badge">Reto 6</div>
            <div className="muted">Text Analyzer</div>
          </div>
        </div>
        <div className="kpi">
          <div><div className="muted">Words</div><div className="big" style={{fontSize:28}}>{stats.words}</div></div>
          <div><div className="muted">Characters</div><div className="big" style={{fontSize:28}}>{stats.chars}</div></div>
          <div><div className="muted">Sentences</div><div className="big" style={{fontSize:28}}>{stats.sentences}</div></div>
          <div><div className="muted">Paragraphs</div><div className="big" style={{fontSize:28}}>{stats.paragraphs}</div></div>
          <div><div className="muted">Longest word</div><div className="big" style={{fontSize:24}}>{stats.longestWord || '—'}</div></div>
        </div>
        <textarea className="input" rows="12" placeholder="Paste your text here..." value={text} onChange={e=>setText(e.target.value)} />
      </div>
    </div>
  )
}
