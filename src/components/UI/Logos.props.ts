import { svgIcons } from "./Losog";

export interface ILogos {
    logoName?: keyof typeof svgIcons,
    styleName?: string
}