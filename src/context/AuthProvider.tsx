import { createContext, useState } from "react";

interface IProps {
  name: string;
  photo: string;
}
const initialValue = {
  name: "",
  photo: "",
};

interface contextIProps {
  authState: IProps;
  setAuthState: any;
}
export const AuthContext = createContext({} as contextIProps);

function AuthProvider({ children }: any) {
  const [authState, setAuthState] = useState<IProps>(initialValue);
  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
