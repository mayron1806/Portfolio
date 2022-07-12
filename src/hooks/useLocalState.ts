import { useEffect, useState } from "react";

const getDataFromLocalStorage = <T>(key_name: string, initialValue: T) => {
    const data = localStorage.getItem(key_name);
    if(data) return JSON.parse(data);
    return initialValue;
}
const useLocalState = <T>(key_name: string, initialValue: T) => {
    const [state, setState] = useState<T>(getDataFromLocalStorage(key_name, initialValue));
    useEffect(()=>{
        localStorage.setItem(key_name, JSON.stringify(state));
    }, [state])
    return {state, setState};
}

export default useLocalState;