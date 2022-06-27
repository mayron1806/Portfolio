import { useState } from "react";

import Header from "./components/Header"
import Techs from "./components/Techs";
import ThemeSelector from "./components/ThemeSelector";
import ColorSelector from "./components/ColorSelector";
import Projects from "./components/Projects";
import About from "./components/About";
import Home from "./components/Home";

import { ColorType, ThemeType } from "./types/theme";
import { LIGHT_THEME } from "./style/theme/light";
import { BLUE_COLOR } from "./style/colors/blue";
import { ThemeProvider } from "styled-components";

import * as C from "./app.style";
import Section from "./components/Section";

const App = ()=> { 
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(LIGHT_THEME);
  const [currentColor, setCurrentColor] = useState<ColorType>(BLUE_COLOR);

  return (
    <ThemeProvider theme={{...currentColor, ...currentTheme}}>
      <C.App>
        <Header />
        {/* SELECTORS */}
        <div className="selectors">
          <ThemeSelector currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
          <ColorSelector currentColor={currentColor} setCurrentColor={setCurrentColor} />
        </div>
        {/* END SELECTORS */}
        {/* CONTENT */}
        <div>
          {/* MAIN */}
          <C.Main>
           <Home />
          </C.Main>
          {/* END MAIN */}
          <Techs />
          <Projects />
          <About />
        </div>
        {/* END CONTENT */}
      </C.App>
    </ThemeProvider>
  )
}
export default App
