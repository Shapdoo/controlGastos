import React from "react";
import { currencyFormat, formatDate } from "../../helpers";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import SavingIcon from "../../img/icono_ahorro.svg";
import HouseIcon from "../../img/icono_casa.svg";
import FoodIcon from "../../img/icono_comida.svg";
import BillsIcon from "../../img/icono_gastos.svg";
import LeisureIcon from "../../img/icono_ocio.svg";
import HealthIcon from "../../img/icono_salud.svg";
import SubsIcon from "../../img/icono_suscripciones.svg";

const dictionaryIcon = {
  saving: SavingIcon,
  house: HouseIcon,
  food: FoodIcon,
  bills: BillsIcon,
  leisure: LeisureIcon,
  health: HealthIcon,
  subscriptions: SubsIcon,
};

export default function Bill({ category, name, quantity, id, date, setEditBill, handleDeleteBill }) {
    const bill = { category, name, quantity, id, date }

    const handleSetEditBill = () =>{
        setEditBill(bill)
    }

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => handleSetEditBill()}>Edtiar..</SwipeAction>
        </LeadingActions>
    )
    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => handleDeleteBill(id)} destructive={true}>Eliminar</SwipeAction>
        </TrailingActions>
    )
    

  return (
    <SwipeableList>
      <SwipeableListItem leadingActions={leadingActions()} trailingActions={trailingActions()}>
        <div className="gasto sombra">
          <div className="contenido-gasto">
            <img src={dictionaryIcon[category]} alt="icon" />

            <div className="descripcion-gasto">
              <p className="categoria"> {category} </p>
              <p className="nombre-gasto"> {name} </p>
              <p className="fecha-gasto">
                Agregado el: {""} <span>{formatDate(date)}</span>
              </p>
            </div>
          </div>
          <p className="cantidad-gasto">{currencyFormat(Number(quantity))}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
}
