//REACT
import React from "react";
import { useState, useEffect } from "react";

//COMPONENTS
import FloatButton from "../FloatButton/FloatButton";
import Message from "../Message/Message";

//ASSETS
import IconClose from "../../img/cerrar.svg";
import { options } from "./models";

export default function Modal({
  setModalOpen,
  modalAnimate,
  setModalAnimated,
  saveBills,
  editBill,
  setEditBill
}) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [category, setCategory] = useState("");
  const [id, setId] = useState("")
  const [date, setDate] = useState("")

  //Validation
  const [message, setMessage] = useState(false);

  useEffect(() => {
    if (Object.keys(editBill).length > 0) {
      setName(editBill.name);
      setQuantity(editBill.quantity);
      setCategory(editBill.category);
      setId(editBill.id)
      setDate(editBill.date)
    }
  }, []);

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditBill({})
    setTimeout(() => {
      setModalAnimated(false);
    }, 500);
  };

  //Enviando el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const inputsAreEmpty = [name, quantity, category].includes("");

    if (inputsAreEmpty) {
      setMessage("Todos los campos son obligatorios.");

      setTimeout(() => {
        setMessage("");
      }, 3000);

      return;
    }

    saveBills({ name, quantity: Number(quantity), category, id, date });
  };
  return (
    <div className="modal">
      <FloatButton
        styled="cerrar-modal"
        icon={IconClose}
        alt="cerrar"
        action={handleCloseModal}
      />

      <form
        className={`formulario ${modalAnimate ? "animar" : "cerrar"}`}
        onSubmit={handleSubmit}
      >
        <legend>{ editBill.name ? "Editar Gasto" : "Nuevo Gasto"}</legend>
        {/* Validation Message */}
        {message && <Message typeMessage="error">{message}</Message>}

        <div className="campo">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            placeholder="Añade el Nombre del Gasto"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="quantity">Cantidad</label>
          <input
            type="number"
            placeholder="Añade el Nombre del Gasto"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>

        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id="categoria"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="" hidden>
              --Seleccione--
            </option>

            {options.map((option) => {
              return (
                <option key={option.id} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>

        <input type="submit" value={editBill.name ? "Guardar Cambios" : "Añadir Gasto"} />
      </form>
    </div>
  );
}
