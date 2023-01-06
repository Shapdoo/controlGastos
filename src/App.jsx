//REACT
import React from "react";
import { useState, useEffect } from "react";

//COMPONENTS
import Header from "./components/Header/Header";
import FloatButton from "./components/FloatButton/FloatButton";
import Modal from "./components/Modal/Modal";
import BillsList from "./components/BillsList/BillsList";
import Filter from "./components/Filter/Filter";

//ASSETS
import IconNewSpent from "./img/nuevo-gasto.svg";
import { generateId } from "./helpers";

export default function App() {

  const [billsFiltered, setFilteredBills] = useState([])
  const [filterValue, setFilterValue] = useState("");
  const [budget, setBudget] = useState(0);
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [openModal, setModalOpen] = useState(false);
  const [modalAnimate, setModalAnimated] = useState(false);
  const [bills, setBills] = useState([]);
  const [editBill, setEditBill] = useState({});

  //Local Storage
  //budget
  useEffect(() => {
    const budget = Number(localStorage.getItem("presupuesto"));
    const billsLS = JSON.parse(localStorage.getItem("gastos"))
    //Si el budget en el LS es mayor a 0 entonces no se muestra la pantalla del budget
    if (budget > 0) {
      setBudget(budget);
      setIsValidBudget(true);
    }

    if(billsLS.length > 0){
      setBills(billsLS)
    }
  }, []);

  //Agrega al LS el budget
  useEffect(() => {
    localStorage.setItem("presupuesto", Number(budget || 0));
  }, [budget]);

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(bills || []));
  }, [bills]);

  //Filtro
  useEffect(() => {
    if(filterValue){
      const filteredData = bills.filter(bill => bill.category === filterValue)
      setFilteredBills(filteredData)
    }
  }, [filterValue])

  useEffect(() => {
    if (Object.keys(editBill).length > 0) {
      setModalOpen(true);

      setTimeout(() => {
        setModalAnimated(true);
      }, 500);
    }
  }, [editBill]);

  //Add Budget
  const handleBudget = () => {
    setModalOpen(true);

    //Reset the bill
    setEditBill({});

    //Delay para animar
    setTimeout(() => {
      setModalAnimated(true);
    }, 500);
  };

  const saveBills = (bill) => {
    //Si el gasto contiene un id entonces significa que existe, por lo tanto actualizamos.
    if (bill.id) {
      const updateBills = bills.map((billState) =>
        billState.id === bill.id ? bill : billState
      );
      setBills(updateBills);
      setEditBill({});
    } else {
      bill.id = generateId();
      bill.date = Date.now();
      setBills([...bills, bill]);
    }

    //Cerrando el modal automaticamente
    setModalOpen(false);
    setTimeout(() => {
      setModalAnimated(false);
    }, 500);
  };

  //Delete Budget
  const handleDeleteBill = (id) => {
    const updateBills = bills.filter((bill) => bill.id !== id);
    setBills(updateBills);
  };

  return (
    <div className={openModal ? "fijar" : ""}>
      <Header
        setBills={setBills}
        budget={budget}
        setBudget={setBudget}
        isValidBudget={isValidBudget}
        setIsValidBudget={setIsValidBudget}
        bills={bills}
      />

      {isValidBudget && (
        <>
          <main>
            <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
            <BillsList
              bills={bills}
              setEditBill={setEditBill}
              handleDeleteBill={handleDeleteBill}
              filterValue={filterValue}
              billsFiltered={billsFiltered}
            />
          </main>
          <FloatButton
            styled="nuevo-gasto"
            icon={IconNewSpent}
            alt="icono-nuevo-gasto"
            action={handleBudget}
          />
        </>
      )}
      {openModal && (
        <Modal
          setModalOpen={setModalOpen}
          modalAnimate={modalAnimate}
          setModalAnimated={setModalAnimated}
          saveBills={saveBills}
          editBill={editBill}
          setEditBill={setEditBill}
        />
      )}
    </div>
  );
}
