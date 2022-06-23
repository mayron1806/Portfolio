import * as C from "./style";

type props = {
    phrases: string[]
}
const DinamicText = ({phrases}:props) => {
    return(
        <C.Text>
            Olá, <br/> eu sou Mayron e
            <C.Dinamic>
                {phrases.map((phrase, index) => (<li key={index}>{phrase}</li>))}
            </C.Dinamic>
        </C.Text>
    )
}
export default DinamicText;