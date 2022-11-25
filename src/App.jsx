//REACT
import React from "react";
import { useState } from "react";

//COMPONENTS
import Header from "./components/Header/Header";
import FloatButton from "./components/FloatButton/FloatButton";
import Modal from "./components/Modal/Modal"

//ASSETS
import IconNewSpent from "./img/nuevo-gasto.svg";
import { generateId } from "./helpers";

export default function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [openModal, setModalOpen] = useState(false)
  const [modalAnimate, setModalAnimated] = useState(false)
  const [bills, setBills] = useState([])

  //Add Budget
  const handleBudget = () => {
    setModalOpen(true)

    //Delay para animar
    setTimeout(() => {
      setModalAnimated(true)
    }, 500)
  }

  const saveBills = (bill) => {
    bill.id = generateId()
    setBills([...bills, bill])

    //Cerrando el modal automaticamente
    setModalOpen(false);
    setTimeout(() => {
      setModalAnimated(false);
    }, 500);
  }

  return (
    <div>
      <Header
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
      />
      {isValidBudget && (
        <FloatButton 
          styled='nuevo-gasto'
          icon={IconNewSpent} 
          alt="icono-nuevo-gasto" 
          action={handleBudget}/>
      )}
      {openModal && ( 
        <Modal 
          setModalOpen={setModalOpen} 
          modalAnimate={modalAnimate} 
          setModalAnimated={setModalAnimated}
          saveBills={saveBills}/>
      )}
    </div>
  );
}
