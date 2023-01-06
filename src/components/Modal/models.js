import { generateId } from "../../helpers";

export const options = [
  { label: "ahorros", value: "saving", id: generateId() },
  { label: "comida", value: "food",  id: generateId() },
  { label: "casa", value: "house",  id: generateId() },
  { label: "gastos", value: "bills",  id: generateId() },
  { label: "ocio", value: "leisure",  id: generateId() },
  { label: "salud", value: "health",  id: generateId() },
  { label: "subscripciones", value: "subscriptions", id: generateId() },
];
