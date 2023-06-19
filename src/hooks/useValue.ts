import { useState } from "react";
import { IValue } from "../Types/IValue";

export const useValue = <T>(initialValue: T): IValue<T> => {
  const [value, setValue] = useState(initialValue);
  return { value, setValue };
};
