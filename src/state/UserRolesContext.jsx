// NPM packages
import { createContext, useContext, useState } from "react";

// Properties
const Context = createContext(null);

// Methods
// For the parent
export function UserRoleProvider({ children }) {
  // Local state
  const [students, setStudents] = useState([]);

  // Properties
  const value = { students, setStudents };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

// For the child
export function useUserRole() {
  const context = useContext(Context);
  const errorText =
    "To use useUserRole(), you need to wrap the parent component with <UserRoleProvider/>";

  // Safeguards
  if (!context) throw new Error(errorText);

  return context;
}
