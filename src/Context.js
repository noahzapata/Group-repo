import React,{ useState } from "react";
// import TotalVotos from "./components/TotalVotos";


export const CandidatosContext = React.createContext()

export const CandidatosProvider =({children})=>{
    const [votes, setVotes] = useState(
        {
            catdidato1:0,
            catdidato2:0,
            catdidato3:0,
            catdidato4:0
    }
    )


    const [filtered, setFiltered]=useState({
        tipoTotal:"numerico",
        catdidatoOpcion:"todos"
    })

    
    const handleFilter = (filters)=>{
        setFiltered (prev=>({...prev,...filters}))
    }

    const handleVotos =(candidato)=>{
     for (const key in votes) {        
         if (key === candidato) {
             setVotes(prev=>({...prev,[key]:prev[key]+1}))            
         }
            }
            
        }
    return (
    <CandidatosContext.Provider value={{votes, handleVotos,filtered, handleFilter}}  >
        {children}
    </CandidatosContext.Provider>
    )
}