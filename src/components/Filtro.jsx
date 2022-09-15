import React  from 'react'
import { Formik, Form, Field } from 'formik'
import { CandidatosContext } from '../Context'

export default function Filtro() {
   
    const filterContext = React.useContext(CandidatosContext)
  return (
    <div className='filtro' >
        <h2>Filtrar informacion</h2>
        <Formik initialValues={{
            tipoTotal: "numerico",
            catdidatoOpcion:"todos"
        }}
            onSubmit={ values=>{
           
               filterContext.handleFilter(values)
            }}
        >
            {()=>(
                <Form >
                     <Field as="select" name="tipoTotal">
                        <option value="porcentaje">Porcentaje</option>
                        <option value="numerico">Numerico</option>
                    </Field>
                     <Field as="select" name="catdidatoOpcion">
                        <option value="todos">Todos</option>
                        <option value="catdidato1">Catdidato1</option>
                        <option value="catdidato2">Catdidato2</option>
                        <option value="catdidato3">Catdidato3</option>
                        <option value="catdidato4">Catdidato4</option>
                    </Field>
                    <button type='submit'>Aplicar filtro</button>
                </Form>
            )}
        </Formik>
    </div>
  )
}
