import React from 'react'

export default function Message({children, typeMessage}) {
    return (
        <div className={`alerta ${typeMessage}`}>
            {children}
        </div>
    )
}