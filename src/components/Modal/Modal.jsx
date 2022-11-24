//REACT
import React from "react";

//COMPONENTS
import FloatButton from "../FloatButton/FloatButton";

//ASSETS
import IconClose from "../../img/cerrar.svg";

export default function Modal({setModalOpen}) {

  const handleCloseModal = () => {
    setModalOpen(false)
  }     
  return (
    <div className="modal">
      <FloatButton
         styled="cerrar-modal" 
         icon={IconClose} 
         alt="cerrar" 
         action={handleCloseModal} 
        />
    </div>
  );
}
