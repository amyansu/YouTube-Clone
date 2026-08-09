import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidapi";

export const AuthContext = createContext<any>(null);

export default function Authcontextprovider({children}:any) {
  const [loading, setloading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setvalue] = useState("New");

  useEffect(() => {
    fetchAlldata(value);
  }, [value]);

  const fetchAlldata = (quary:string) => {
    setloading(true);
    fetchData(`search/?q=${quary}`).then((res) => {
      console.log(res);
      setData(res);
      setloading(false);
    });
  };
  return (
    <AuthContext.Provider value={{ loading, data, value, setvalue }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
