import { createContext, useState } from "react";

const ManagementContext = createContext()
export const ContextProvider = ({children}) => {
    const [dataList, setDataList] = useState([
        {id : "K423", name : 'Tuna-kaslana', vat : true, price : 3000, update : '07/011/2023 04:23' },
        {id : "M7th", name : 'Marchtard', vat : false, price : 700, update : '07/03/2023 21:07' }
      ])

    return (
        <ManagementContext.Provider value={{
            dataList,
            setDataList,
        }}>
            {children}
        </ManagementContext.Provider>
    )
}

export default ManagementContext;