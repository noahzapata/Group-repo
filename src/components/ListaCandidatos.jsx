import React, { useContext } from 'react'
import { CandidatosContext } from '../Context'
import Candidato from './Candidato'

const candidatosArr=[
    "catdidato1",
    "catdidato2",
    "catdidato3",
    "catdidato4",
]



export default function ListaCandidatos() {
    const amount = useContext(CandidatosContext)
  return (
    <div className='candidato-container'>
        {
            candidatosArr.map(candidato=> <Candidato 
                key={candidato} 
                name= {candidato} 
                amount={amount}
                />)
        }
    </div>
  )
}
