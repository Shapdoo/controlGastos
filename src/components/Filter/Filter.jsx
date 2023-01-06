import { useState, useEffect } from "react";
import { options } from "../Modal/models";

export default function Filter({ filterValue, setFilterValue }) {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label htmlFor="">Filtrar Gastos</label>
          <select
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          >
            <option value="" >
              --Todo--
            </option>

            {options.map((option, idx) => {
              return (
                <option value={option.value} key={option.id}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>
      </form>
    </div>
  );
}
