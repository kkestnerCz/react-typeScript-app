import React, {
  useContext,
  useState,
  SetStateAction,
  Dispatch,
  createContext,
} from "react";

type Props = {
  children: React.ReactNode;
};

type Context = {
  formData: {
    name: string;
    surname: string;
    street: string;
    houseNr: string;
    city: string;
    zipCode: string;
    phone: string;
  };
  alert: {
    type: "error" | "success" | "info";
    message: string;
  };
  lastApiCallState: boolean;
  mainColor: string;
  loading: boolean;
  setContext: Dispatch<SetStateAction<Context>>;
  clearFormData: () => void;
};

export const initialContext: Context = {
  formData: {
    name: "",
    surname: "",
    street: "",
    houseNr: "",
    city: "",
    zipCode: "",
    phone: "",
  },
  alert: {
    type: "info",
    message: "",
  },
  lastApiCallState: true,
  mainColor: "45D2B0",
  loading: false,
  setContext: (): void => {
    throw new Error("setContext function must be overridden");
  },
  clearFormData: () => {},
};

export const FormContext = createContext<Context>(initialContext);

export const useFormCtx = () => {
  return useContext(FormContext);
};

export const FormCtxProvider = ({ children }: Props) => {
  const [context, setContext] = useState<Context>(initialContext);

  // Will set form data to initial state. I do want rest of app states remain same
  const clearFormData = () => {
    setContext((prevState) => ({
      ...prevState,
      formData: { ...initialContext.formData },
    }));
  };

  return (
    <FormContext.Provider value={{ ...context, setContext, clearFormData }}>
      {children}
    </FormContext.Provider>
  );
};
