// NPM packages
import { createContext, useContext, useState } from "react";

// Properties
const Context = createContext(null);

// Methods
// For the parent
export function ResourceProvider({ children }) {
  // Local state
  const [links, setLinks] = useState([]);
  const [files, setFiles] = useState([]);

  // Properties
  const value = { links, setLinks, files, setFiles };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

// For the child
export function useResources() {
  const context = useContext(Context);
  const errorText =
    "To use useResources(), you need to wrap the parent component with <ResourceProvider/>";

  // Safeguards
  if (!context) throw new Error(errorText);

  return context;
}
