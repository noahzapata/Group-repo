import React from 'react'
import { CandidatosContext } from '../Context'

const {filtered,votes} = React.useContext(CandidatosContext)

const toRender=[]

const  {tipoTotal,catdidatoOpcion} =filtered

let total = 0;
for (const key in votes) {
  total += votes[key]
}

export default function VotosIndividuales() {

    return (
    <div>
        {}
    </div>
  )
}
