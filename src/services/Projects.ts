import { collection, getDocs } from "firebase/firestore"
import { ProjectType } from "../types/project";
import { firestore } from "./firebase";

const projectRef = collection(firestore, "projects");

const getProjects = async () => {
    const result : ProjectType[] = [];
    const projects = await getDocs(projectRef);
    projects.forEach(project =>{
        result.push(project.data() as ProjectType);
    })
    return result;
}

export {
    getProjects
}