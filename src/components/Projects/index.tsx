import Project from "../Project";
import Title from "../Title";
import * as C from "./style";

const Projects = () => {
    return(
        <C.Container>
            <Title>Projetos</Title>
            <C.Content>
                <Project />
            </C.Content>
        </C.Container>
    )
}
export default Projects;