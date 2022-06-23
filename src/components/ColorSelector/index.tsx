import React, { useState } from "react";
import * as C from "./style";
import { ColorType } from "../../types/theme";

import { BLUE_COLOR } from "../../style/colors/blue";
import { ORANGE_COLOR } from "../../style/colors/orange";

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
                <C.Color 
                    onClick={()=> changeColor(BLUE_COLOR)}
                    color={BLUE_COLOR.main} 
                    className={activeColor(BLUE_COLOR) ? "active" : ""}
                />
                <C.Color 
                    onClick={()=> changeColor(ORANGE_COLOR)}
                    color={ORANGE_COLOR.main} 
                    className={activeColor(ORANGE_COLOR) ? "active" : ""}
                />
            </C.Content>
        </C.Container>
    )
}
export default ColorSelector;