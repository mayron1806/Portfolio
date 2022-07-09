import { collection, getDocs } from "firebase/firestore"
import { TechType, TechsType } from "../types/tech";
import { firestore } from "./firebase";

const techsRef = collection(firestore, "techs");
const getTechs = async() => {
    const result: TechsType = [];
    const techs = await getDocs(techsRef);
    techs.forEach(tech => {
        result.push(tech.data() as TechType);
    })
    return result;
}

export{
    getTechs
}