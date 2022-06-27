import * as C from "./style";
import img from "../../assets/project-image.png";
import { useEffect, useRef, useState } from "react";
type props = {
    siteURL?: string,
    gitURL?: string,
    imageLeft?: boolean
}
const colors = ["blue", "red", "green"]
const Project = ({siteURL, gitURL ,imageLeft = false}: props) => {
    // carrousel
    const [carrouselIndex, setCarrouselIndex] = useState<number>(0);

    const imagemContainerRef = useRef<HTMLDivElement | null>(null);
    // carrousel effect
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            if(!imagemContainerRef || imagemContainerRef.current === null) return;
            const length = imagemContainerRef.current.children.length;

            if(carrouselIndex + 1 >= length) setCarrouselIndex(0);
            else setCarrouselIndex(carrouselIndex + 1);

            const width = imagemContainerRef.current.offsetWidth;
            imagemContainerRef.current.scrollLeft = carrouselIndex * width;
        }, 5000);
        return () => clearInterval(timeout);
    }, [carrouselIndex]);

    return(
        <C.Container className={imageLeft ? "image-left" : ""}>
            <C.Title>Nome do projeto</C.Title>
            <C.Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perferendis facere impedit 
                consequuntur error consectetur deserunt dolorum fuga quod sed nobis accusamus neque possimus
                porro, inventore illo libero sequi repudiandae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi perferendis facere impedit 
                consequuntur error consectetur deserunt dolorum fuga quod sed nobis accusamus neque possimus
                porro, inventore illo libero sequi repudiandae?
            </C.Description>
            <C.Buttons>
                {
                    siteURL && <C.Link>Site ao vivo</C.Link>
                }
                {
                    gitURL && <C.Link>GitHub</C.Link>
                }
            </C.Buttons>
            <C.ImagesContainer ref={imagemContainerRef}>
                {
                    colors.map((color, index) => (
                        <C.Image key={index} src={img}/>
                    ))
                }
            </C.ImagesContainer>
        </C.Container>
    )
}
export default Project;