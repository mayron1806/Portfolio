import React, { useState } from "react";
import * as C from "./style";
import { DARK_THEME } from "../../style/theme/dark";
import { LIGHT_THEME } from "../../style/theme/light";
import { ThemeType } from "../../types/theme";

type props ={
    currentTheme: ThemeType,
    setCurrentTheme: React.Dispatch<React.SetStateAction<ThemeType>>
}
const ThemeSelector = ({currentTheme, setCurrentTheme} :props) => {
    const [active, setActive] = useState<boolean>(false);

    const setDarkTheme = () => setCurrentTheme(DARK_THEME);
    const setLightTheme = ()=> setCurrentTheme(LIGHT_THEME);
    
    const activeTheme = (theme: ThemeType) => theme === currentTheme
    
    return(
        <C.Container className={active ? "active" : ""}>
            <C.Head 
                onClick={()=> setActive(state => !state)} 
                className={active ? "active" : ""}
            />
            <C.Content>
                <C.Dark
                    className={activeTheme(DARK_THEME) ? "active" : ""} 
                    onClick={()=> setDarkTheme()}
                />
                <C.Light 
                    className={activeTheme(LIGHT_THEME) ? "active" : ""} 
                    onClick={()=> setLightTheme()}
                    />
            </C.Content>
        </C.Container>
    )
}
export default ThemeSelector;