import { useEffect, useRef, useState } from "react";
import { TechsType, TechType } from "../../types/tech";
import * as C from "./style";
import TechItem from "../TechItem";
import { getTechs } from "../../services/Tech";

enum Direction {
    LEFT,
    RIGHT
}
const scroll = (element: HTMLDivElement, direction: Direction) => {
    const offset = element.offsetWidth;
    if(direction === Direction.LEFT) element.scrollLeft -= offset;
    else element.scrollLeft += offset;
}
const Techs = () => {
    const [techs, setTechs] = useState<TechsType>([]);
    const techContainerRef = useRef<HTMLDivElement | null>(null);
    
    const [leftScrollArrows, setLeftScrollArrows] = useState<boolean>(true);
    const [rightScrollArrows, setRightScrollArrows] = useState<boolean>(true);
    
    // pega as tecnologias no banco
    useEffect(()=>{
        getTechs()
        .then((res)=>{
            // ordena o array de acordo com a propriedade "order" do objeto
            res.sort((a : TechType, b : TechType) => a.order - b.order);
            setTechs(res);
        })  
        .catch(error =>{
            console.log(error)
        })
    }, [])
    
    const leftScroll = () => {
        if(techContainerRef.current === null) return;
        scroll(techContainerRef.current, Direction.LEFT);
    }   
    const rightScroll = () => {
        if(techContainerRef.current === null) return;
        scroll(techContainerRef.current, Direction.RIGHT);
    }
    return(
        <C.Container id="tech">
            <C.Title >Tecnologias</C.Title>
            <C.Content>
                <C.TechsContent ref={techContainerRef}>
                    {
                        techs.map((tech, index)=> (
                            <TechItem key={index} tech={tech}/>
                        ))
                    }
                </C.TechsContent>
                <div>
                    {leftScrollArrows && <C.DownButton onClick={() => leftScroll()} />}
                    {rightScrollArrows && <C.UpButton onClick={() => rightScroll()} />}
                </div>
            </C.Content>
        </C.Container>
    )
}
export default Techs;