import Section from "../Section";
import * as C from "./style";
import image from "../../assets/project-image.png";
const About = () => {
    return(
        <C.Container>
            <svg className="wave top" width="3000" height="60" viewBox="0 0 3000 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 40.0009C0 40.0009 275.992 -47.9984 375 40.0009C474.008 128 750 40.0009 750 40.0009C750 40.0009 1002.36 -44.4981 1125 40.0009C1247.64 124.5 1500 40.0009 1500 40.0009C1500 40.0009 1777.41 -17.4981 1875 40.0009C1972.59 97.5 2250 40.0009 2250 40.0009C2250 40.0009 2472.59 -18.4991 2625 40.0009C2777.41 98.5009 3000 40.0009 3000 40.0009V198.5H0V40.0009Z" fill="#69C3FF"/>
            </svg>
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
            <svg className="wave bottom" width="3000" height="60" viewBox="0 0 3000 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 40.0009C0 40.0009 275.992 -47.9984 375 40.0009C474.008 128 750 40.0009 750 40.0009C750 40.0009 1002.36 -44.4981 1125 40.0009C1247.64 124.5 1500 40.0009 1500 40.0009C1500 40.0009 1777.41 -17.4981 1875 40.0009C1972.59 97.5 2250 40.0009 2250 40.0009C2250 40.0009 2472.59 -18.4991 2625 40.0009C2777.41 98.5009 3000 40.0009 3000 40.0009V198.5H0V40.0009Z" fill="#69C3FF"/>
            </svg>
        </C.Container>
    )
}
export default About;