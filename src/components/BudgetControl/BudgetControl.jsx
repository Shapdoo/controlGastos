import React from "react";

export default function BudgetControl({ budget }) {
  const currencyFormat = (quantity) => {
    const toLocaleCurrency = quantity.toLocaleString("es-PE", {
      style: "currency",
      currency: "PEN",
    });

    return toLocaleCurrency;
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Gráfica aqui</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Prespupuesto: </span> {currencyFormat(budget)}
        </p>

        <p>
          <span>Disponible: </span> {currencyFormat(0)}
        </p>

        <p>
          <span>Gastado: </span> {currencyFormat(0)}
        </p>
      </div>
    </div>
  );
}
