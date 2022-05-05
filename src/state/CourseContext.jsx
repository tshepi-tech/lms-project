// NPM packages
import { createContext, useContext, useState } from "react";

// Properties
const Context = createContext(null);

// Methods
// For the parent
export function CourseProvider({ children }) {
  // Local state
  const [courses, setCourses] = useState([]);

  // Properties
  const value = { courses, setCourses };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

// For the child
export function useCourses() {
  const context = useContext(Context);
  const errorText =
    "To use useItems(), you need to wrap the parent component with <CourseProvider/>";

  // Safeguards
  if (!context) throw new Error(errorText);

  return context;
}
