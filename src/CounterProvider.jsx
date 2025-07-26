import { Children, useState } from "react";
import CounterContext from "./CounterContext";


const CounterProvider = ({children}) => {
    const [counter, setCounter] = useState(0)

    const inc = () => setCounter(counter+1)
    const dsc = () => setCounter(counter-1)
    const rst = () => setCounter(0)

    return(
        <CounterContext.Provider value={{counter, inc, dsc, rst}}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider;