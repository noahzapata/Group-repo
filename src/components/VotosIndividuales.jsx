import React from 'react'
import { CandidatosContext } from '../Context'




export default function VotosIndividuales() {
  const { filtered, votes } = React.useContext(CandidatosContext)
  const toRender = []
  let total = 0;
  for (const key in votes) {
    total += votes[key]
  }
  const { tipoTotal, catdidatoOpcion } = filtered


  if (tipoTotal === "numerico" && catdidatoOpcion === "todos") {
    toRender.push(votes)

  }



  return (

    <div className="side-catdidatos" >
      <p className={catdidatoOpcion === "catdidato1" || catdidatoOpcion === "todos" ? "enabled" : "disabled"} >
        <span>C1:{tipoTotal === "numerico" ? votes.catdidato1 : `${Math.round((votes.catdidato1 / total) * 100)}%`}</span>
      </p>
      <p className={catdidatoOpcion === "catdidato2" || catdidatoOpcion === "todos" ? "enabled" : "disabled"}>
        <span>C2:{tipoTotal === "numerico" ? votes.catdidato2 : `${Math.round((votes.catdidato2 / total) * 100)}%`}</span>
      </p>
      <p className={catdidatoOpcion === "catdidato3" || catdidatoOpcion === "todos" ? "enabled" : "disabled"}>
        <span>C3:{tipoTotal === "numerico" ? votes.catdidato3 : `${Math.round((votes.catdidato3 / total) * 100)}%`}</span>
      </p>
      <p className={catdidatoOpcion === "catdidato4" || catdidatoOpcion === "todos" ? "enabled" : "disabled"}>
        <span>C4:{tipoTotal === "numerico" ? votes.catdidato4 : `${Math.round((votes.catdidato4 / total) * 100)}%`}</span>
      </p>
    </div>
  )
}
