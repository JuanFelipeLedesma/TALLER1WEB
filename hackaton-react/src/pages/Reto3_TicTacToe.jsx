import { useState } from 'react'

export default function Reto3_TicTacToe(){
  const [board,setBoard]=useState(Array(9).fill(null))
  const [turn,setTurn]=useState('X')

  function play(i){
    if(board[i])return
    const next=[...board]
    next[i]=turn
    setBoard(next)
    setTurn(t=>t==='X'?'O':'X')
  }

  function reset(){
    setBoard(Array(9).fill(null))
    setTurn('X')
  }

  return (
    <div className="container center">
      <div className="surface" style={{maxWidth:460,width:'100%'}}>
        <div className="toolbar">
          <div className="row" style={{gap:8}}>
            <div className="badge">Reto 3</div>
            <div className="muted">Turno: {turn}</div>
          </div>
          <button className="btn ghost" onClick={reset}>Reiniciar</button>
        </div>
        <div className="grid-ttt">
          {board.map((v,i)=>(
            <button key={i} className="cell" onClick={()=>play(i)}>
              {v ? <span className={v==='X' ? 'x' : 'o'}>{v}</span> : null}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
