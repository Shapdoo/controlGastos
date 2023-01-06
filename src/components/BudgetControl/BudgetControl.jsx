import React from "react";
//Helpers
import { currencyFormat } from "../../helpers";
//Hooks
import { useState, useEffect } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";



export default function BudgetControl({ budget, bills, setBills, setBudget, setIsValidBudget }) {
  const [percentage, setPercentage] = useState(0);
  const [currentMoney, setCurrentMoney] = useState(0);
  const [spend, setSpend] = useState(0);


  const configStyles = {
    pathColor: percentage > 100 ? '#DC2626' : '#3B82f6',
    trailColor: '#F5F5F5',
    textColor: percentage > 100 ? '#DC2626' : '#3B82f6'
  }

  const handleResetApp = () => {
    const resultado = confirm('¿Deseas reiniciar presupuesto y gastos?')

    if(resultado){
      setBills([])
      setBudget(0)
      setIsValidBudget(false)
    }
  }


  useEffect(() => {
    //Al cargar por primera vez es 0 el resultado
    const totalSpend = bills.reduce( (total, spend) => spend.quantity + total, 0 )
    const totalAvailable = budget - totalSpend;

    //calcular porcentaje gastado
    const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(2);

    console.log(currentMoney, budget) // el resultado es 0 y mi presupuesto, por que????
    setCurrentMoney(totalAvailable);
    setSpend(totalSpend);
    setPercentage(newPercentage);
  }, [bills]);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <CircularProgressbar styles={buildStyles(configStyles)} value={percentage} text={`${percentage}% Gastado`}/>
      </div>

      <div className="contenido-presupuesto">
        <button type="button" className="reset-app" onClick={handleResetApp}>
            Resetear App
        </button>
        <p>
          <span>Prespupuesto: </span> {currencyFormat(budget)}
        </p>

        <p className={`${currentMoney < 0 ? 'negativo' : ''}`}>
          <span>Disponible: </span> {currencyFormat(currentMoney)}
        </p>

        <p>
          <span>Gastado: </span> {currencyFormat(spend)}
        </p>
      </div>
    </div>
  );
}
