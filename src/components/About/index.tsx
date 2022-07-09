import * as C from "./style";
import Title from "../Title";
import Pivot from "../Pivot";
const About = () => {
    return(
        <C.Container>
            <C.Wave>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,176C384,203,480,245,576,250.7C672,256,768,224,864,197.3C960,171,1056,149,1152,154.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </C.Wave>
            <div className="main">
                <Pivot id="about"/>
                <Title reverseColor={true} title="Sobre mim"/>
                <C.Content>
                    <C.Image />
                    <C.Info>
                        <C.Text>
                            <h3>Eu sou Mayron</h3>
                            <p>
                            Há certa de 2 anos eu conheci a programação e me identifiquei muito com a área.
                            Comecei estudando C# para desenvolver jogos na unity. Depois de 1 ano comecei a 
                            estudar desenvolvimento web e desde então tenho focado nessa área.<br/>
                            Gosto de aprofundar meus conhecimentos nas tecnologias e evoluir cada vez mais.<br/>
                            Atualmente desenvolvo projetos em ReactJS, TypeScript e Firebase, além disso 
                            possuo experiência em consumo de API como: "ViaCEP" e "jikan API". E atualmente estou 
                            estudando express e mongodb, para alcançar meu desejado fullstack.
                            </p>
                        </C.Text>
                        <div className="button-container">
                            <C.Button backgroundColor="#24292D" target="_blank" href="https://www.linkedin.com/in/mayron-fernandes/">
                                <C.GitHubIcon/>
                                GitHub
                            </C.Button>
                            <C.Button backgroundColor="#0077B5" target="_blank" href="https://github.com/mayron1806">
                                <C.LinkedInIcon/>
                                LinkedIn
                            </C.Button>
                        </div>
                    </C.Info>
                </C.Content>
            </div>
            <C.Wave className="reverse">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#0099ff" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,176C384,203,480,245,576,250.7C672,256,768,224,864,197.3C960,171,1056,149,1152,154.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </C.Wave>
        </C.Container>
    )
}
export default About;