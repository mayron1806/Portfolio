import * as C from "./style";
type props = {
    title: string,
    children: JSX.Element
}
const Section = ({title, children} : props) => {
    return(
        <C.Container>
            <C.Title>{title}</C.Title>
            <div>{children}</div>
        </C.Container>
    )
}
export default Section;