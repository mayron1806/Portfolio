import React, { useState } from "react";
import * as C from "./style";
import { ColorType } from "../../types/theme";

import colors from '../../style/colors/colors';
import deepCompare from "../../utils/DeepCompare";

type props ={
    currentColor: ColorType,
    setCurrentColor: React.Dispatch<React.SetStateAction<ColorType>>
}
const ColorSelector = ({currentColor, setCurrentColor} :props) => {
    const [active, setActive] = useState<boolean>(false);

    const changeColor = (color: ColorType) => setCurrentColor(color);

    const renderOptions = () => {
        console.log(currentColor);
        return(
            <C.Content>
            {
                colors.map((color, index)=> (
                    <C.Color 
                        key={index}
                        onClick={()=> changeColor(color)}
                        color={color.main} 
                        className={deepCompare(color, currentColor) ? "selected" : ""}
                    />
                ))
            }
            </C.Content>
        )
    }
    return(
        <C.Container className={active ? "active" : ""}>
            <C.Head onClick={()=> setActive(state => !state)} />
            {renderOptions()}
        </C.Container>
    )
}
export default ColorSelector;