import React from 'react'

export default function Candidato({name,amount}) {
  return (
    <div className='card'>
      
      <h2>{name}</h2>
      <img src="https://petcostumecenter.com/wp-content/uploads/2020/05/580413_PS_PAW_BILL_SUIT-scaled.jpg" alt="Catdidato" />
      <button onClick={()=>amount.handleVotos(name)}>Votar</button>
    </div>
  )
}
