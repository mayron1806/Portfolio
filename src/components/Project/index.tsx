import * as C from "./style";
import { useEffect, useRef, useState } from "react";
type props = {
    title: string,
    description: string
    siteURL?: string,
    gitURL?: string,
    imageLeft?: boolean,
    imagesURL?: string[]
}
const Project = ({title, description, siteURL, gitURL, imagesURL = [] ,imageLeft = false}: props) => {
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
            <C.Title>{title}</C.Title>
            <C.Description>{description}</C.Description>
            <C.Buttons>
                { siteURL && <C.Link href={siteURL} target="_blank">Site ao vivo</C.Link> }
                { gitURL && <C.Link href={gitURL} target="_blank">GitHub</C.Link> }
            </C.Buttons>
            <C.ImagesContainer ref={imagemContainerRef}>
            {
                imagesURL.map((img, index) => (<C.Image key={index} src={img}/>))
            } 
            </C.ImagesContainer>
        </C.Container>
    )
}
export default Project;