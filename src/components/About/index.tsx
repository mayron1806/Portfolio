import Section from "../Section";
import * as C from "./style";
import image from "../../assets/project-image.png";
const About = () => {
    return(
        <C.Container>
            <C.Wave>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#0099ff" fill-opacity="1" d="M0,128L48,133.3C96,139,192,149,288,176C384,203,480,245,576,250.7C672,256,768,224,864,197.3C960,171,1056,149,1152,154.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
            </C.Wave>
            <div className="main">
                <C.Title>Sobre mim</C.Title>
                <C.Content>
                    <C.Image src={image}/>
                    <C.Info>
                        <C.Text>
                            <h3>Eu sou Mayron</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Earum quos ipsa facilis voluptas sunt quia totam fugiat animi. 
                                Fuga est vitae deserunt quaerat rem culpa numquam nihil provident molestiae? 
                                Numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Earum quos ipsa facilis voluptas sunt quia totam fugiat animi. 
                                Fuga est vitae deserunt quaerat rem culpa numquam nihil provident molestiae? 
                                Numquam?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Earum quos ipsa facilis voluptas sunt quia totam fugiat animi. 
                                Fuga est vitae deserunt quaerat rem culpa numquam nihil provident molestiae? 
                                Numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Earum quos ipsa facilis voluptas sunt quia totam fugiat animi. 
                                Fuga est vitae deserunt quaerat rem culpa numquam nihil provident molestiae? 
                                Numquam?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Earum quos ipsa facilis voluptas sunt quia totam fugiat animi. 
                                Fuga est vitae deserunt quaerat rem culpa numquam nihil provident molestiae? 
                                Numquam? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Earum quos ipsa facilis voluptas sunt quia totam fugiat animi. 
                                Fuga est vitae deserunt quaerat rem culpa numquam nihil provident molestiae? 
                                Numquam?
                                
                            </p>
                        </C.Text>
                        <div className="button-container">
                            <C.Button backgroundColor="#24292D" href="#">
                                <C.GitHubIcon/>
                                GitHub
                            </C.Button>
                            <C.Button backgroundColor="#0077B5" href="#">
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