export interface ThemeType {
    primary: string, // white
    secondary: string, // black
    gray: string,
    light_gray: string
}
export interface ColorType {
    main: string, // blue
    main2: string // light-blue
}
export interface StyleSchemaType extends ThemeType, ColorType {};