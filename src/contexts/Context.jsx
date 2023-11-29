import { createContext, useEffect, useState } from "react";

export const Context = createContext({});

export function ContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then(setUsers);
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);
  console.log(users, products);

  const logins = { users };
  const stock = { products };
  return (
    <Context.Provider value={`${logins} ${stock}`}>{children}</Context.Provider>
  );
}
