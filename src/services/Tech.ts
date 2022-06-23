import { collection, getDocs } from "firebase/firestore"
import { TechType, TechsType } from "../types/tech";
import { firestore } from "./firebase";

const techsRef = collection(firestore, "techs");
const getTechs = async() => {
    const result: TechsType = [];
    const data = await getDocs(techsRef);
    data.forEach(item => {
        result.push(item.data() as TechType);
    })
    return result;
}

export{
    getTechs
}