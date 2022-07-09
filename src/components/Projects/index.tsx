import Project from "../Project";
import styled from "styled-components";
import Title from "../Title";
import Pivot from "../Pivot";
import { useEffect, useState } from "react";
import { ProjectType } from "../../types/project";
import { getProjects } from "../../services/Projects";
 
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
    const [projects, setProjects] = useState<ProjectType[]>([]);
    const [loadingProjects, setLoadingProjects] = useState<boolean>(false);
    useEffect(()=>{
        setLoadingProjects(true);
        getProjects()
        .then(res=> {
            // ordena o array de acordo com a propriedade "order" do objeto
            res.sort((a : ProjectType, b : ProjectType) => a.order - b.order);
            setProjects(res);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(()=>{
            setLoadingProjects(false);
        })
    }, [])
    return(
        <Container>
            <Pivot id="projects"/>
            <Title title="Projetos"/>
            <ProjectList>
            { 
                !loadingProjects && 
                    projects.map(project => (
                        <Project 
                            key={project.order} 
                            title={project.title}
                            description={project.description}
                            gitURL={project.gitURL} 
                            siteURL={project.siteURL} 
                            imagesURL={project.images} 
                            imageLeft={project.order % 2 === 0} 
                        />
                    )) 
            }
            </ProjectList>
        </Container>
    )
}
export default Projects;