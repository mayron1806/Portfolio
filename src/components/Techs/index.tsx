import { useEffect, useRef, useState } from "react";
import { TechsType, TechType } from "../../types/tech";
import * as C from "./style";
import TechItem from "../TechItem";
import { getTechs } from "../../services/Tech";
import Title from "../Title";
import Pivot from "../Pivot";

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
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const techContainerRef = useRef<HTMLDivElement | null>(null);
    
    
    // pega as tecnologias no banco
    useEffect(()=>{
        setIsLoading(true);
        getTechs()
        .then((res)=>{
            // ordena o array de acordo com a propriedade "order" do objeto
            res.sort((a : TechType, b : TechType) => a.order - b.order);
            setTechs(res);
            setIsLoading(false);
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
        <C.Container>
            <Pivot id="tech"/>
            <Title title="Tecnologias"/>
            <C.Content>
                <C.TechsContent ref={techContainerRef}>
                    {
                        !isLoading &&
                        techs.map((tech, index)=> (
                            <TechItem key={index} tech={tech}/>
                        ))
                        ||
                        <C.Loading>Carregando</C.Loading>
                    }
                </C.TechsContent>
                <div>
                    <C.DownButton onClick={() => leftScroll()} />
                    <C.UpButton onClick={() => rightScroll()} />
                </div>
            </C.Content>
        </C.Container>
    )
}
export default Techs;