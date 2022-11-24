//REACT
import { useState } from "react";

//COMPONENTS
import Header from "./components/Header/Header";
import FloatButton from "./components/FloatButton/FloatButton";
import Modal from "./components/Modal/Modal"

//ASSETS
import IconNewSpent from "./img/nuevo-gasto.svg";

export default function App() {
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [openModal, setModalOpen] = useState(false)

  //Add Budget
  const handleBudget = () => {
    setModalOpen(true)
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
        <Modal setModalOpen={setModalOpen}/>
      )}
    </div>
  );
}
