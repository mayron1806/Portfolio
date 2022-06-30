import Project from "../Project";
import Section from "../Section";
import img from "../../assets/project-image.png";
import styled from "styled-components";
const im = [img]
const a = [1,2,3,4]
const ProjectList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
`;
const Projects = () => {
    return(
        <Section title="Projetos">
            <ProjectList>
                { 
                    a.map(t => (
                        <Project key={t} gitURL={"a"} siteURL={"a"} imagesURL={im} imageLeft={t % 2 === 0} />
                    )) 
                }
            </ProjectList>
        </Section>
    )
}
export default Projects;