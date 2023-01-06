import Bill from "../Bill/Bill";

export default function BillsList({
  bills,
  setEditBill,
  handleDeleteBill,
  filterValue,
  billsFiltered,
}) {
  return (
    <div className="listado-gasto contenedor">
      {filterValue ? (
        <>
          <h2>{billsFiltered.length === 0 ? "No hay gastos aún en esta categoía" : "Gastos"}</h2>
          {billsFiltered.map((bill) => {
            return (
              <Bill
                key={bill.id}
                {...bill}
                setEditBill={setEditBill}
                handleDeleteBill={handleDeleteBill}
              />
            );
          })}
        </>
      ) : (
        <>
          <h2>{bills.length === 0 ? "No hay gastos aún" : "Gastos"}</h2>

          {bills.map((bill) => {
            return (
              <Bill
                key={bill.id}
                {...bill}
                setEditBill={setEditBill}
                handleDeleteBill={handleDeleteBill}
              />
            );
          })}
        </>
      )}
    </div>
  );
}
