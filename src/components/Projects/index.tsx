import Project from "../Project";
import img from "../../assets/project-image.png";
import styled from "styled-components";
import Title from "../Title";
import Pivot from "../Pivot";
const im = [img];
const a = [1,2,3,4];

const Container = styled.div`
    padding: 0 2rem;
    position: relative;
`;
const ProjectList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;
const Projects = () => {
    return(
        <Container>
            <Pivot id="projects"/>
            <Title title="Projetos"/>
            <ProjectList>
            { 
                a.map(t => (
                    <Project 
                        key={t} 
                        gitURL={"a"} 
                        siteURL={"a"} 
                        imagesURL={im} 
                        imageLeft={t % 2 === 0} 
                    />
                )) 
            }
            </ProjectList>
        </Container>
    )
}
export default Projects;