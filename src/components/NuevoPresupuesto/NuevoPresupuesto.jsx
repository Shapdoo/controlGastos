import React from 'react'
import { useState } from 'react'

import Message from '../Message/Message'

export default function NuevoPresupuesto({
    budget, 
    setBudget, 
    setIsValidBudget, 
}){

    const [message, setMessage] = useState('')

    const handleBudget = (e) => {
        e.preventDefault()

        //Si no es un numero O si es menor a 0
        if(!Number(budget) || Number(budget) < 0){
            setMessage('No es un presupuesto válido.')
            setBudget(0)
            return
        }

        setMessage('')
        setIsValidBudget(true)
        
    }

    return(
        <div className='contenedor-presupuesto contenedor sombra'>
            <form className='formulario' onSubmit={handleBudget}>
                <div className='campo'>
                    <label htmlFor="">Definir presupuesto</label>
                    <input 
                        type="text"
                        className='nuevo-presupuesto'
                        placeholder='Añade tu presupuesto'
                        value={budget}
                        onChange={(e) => setBudget(Number(e.target.value))} 
                    />

                    <input type="submit"  value='Añadir'/>
                    {message && <Message typeMessage='error'>{message}</Message>}
                </div>
            </form>
        </div>
    )
}