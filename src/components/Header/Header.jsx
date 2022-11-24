import React from "react";

import NuevoPresupuesto from "../NuevoPresupuesto/NuevoPresupuesto";
import BudgetControl from "../BudgetControl/BudgetControl";

export default function Header({
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
}) {
  return (
    <header>
      <h1>Planificador de gastos</h1>

      {/* Si el prespupuesto es valido, entonces cargas
      el componente administrador, si no es valido entonces 
      retornas el componente de nuevo prespuesto */}

      {isValidBudget ? (
        <BudgetControl budget={budget}/>
      ) : (
        <NuevoPresupuesto
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
    
  );
}
