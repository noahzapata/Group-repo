import React, { useContext } from 'react'
import { CandidatosContext } from '../Context'

export default function TotalVotos() {
  const {votes} = useContext(CandidatosContext)
  let total = 0;
  for (const key in votes) {
    total += votes[key]
  }
    return (
    <div className='totalvotos'>
      <h3>Total de votantes</h3>
      <p>{total}</p>
    </div>
  )
}
