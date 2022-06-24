import React, { useState } from "react";
import * as C from "./style";
import { ColorType } from "../../types/theme";

import colors from '../../style/colors/colors';

type props ={
    currentColor: ColorType,
    setCurrentColor: React.Dispatch<React.SetStateAction<ColorType>>
}
const ColorSelector = ({currentColor, setCurrentColor} :props) => {
    const [active, setActive] = useState<boolean>(false);
    
    const activeColor = (color: ColorType) => color === currentColor;

    const changeColor = (color: ColorType) => setCurrentColor(color);

    return(
        <C.Container className={active ? "active" : ""}>
            <C.Head onClick={()=> setActive(state => !state)} />
            <C.Content>
                {
                    colors.map((color, index)=> (
                        <C.Color 
                            key={index}
                            onClick={()=> changeColor(color)}
                            color={color.main} 
                            className={activeColor(color) ? "selected" : ""}
                        />
                    ))
                }
            </C.Content>
        </C.Container>
    )
}
export default ColorSelector;