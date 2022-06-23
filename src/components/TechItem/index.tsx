import { TechType } from "../../types/tech";
import * as C from "./style";

type props = {
    tech: TechType
}
const TechItem = ({tech}: props) => {
    return(
        <C.Container>
            <img src={tech.logo} alt="Tech icon" />
            <C.Content className="content">
                <h3>{tech.title}</h3>
                <p>{tech.description}</p>
                <a href={tech.link} target="_blank">Saiba mais</a>
            </C.Content>
        </C.Container>
    )
}
export default TechItem;