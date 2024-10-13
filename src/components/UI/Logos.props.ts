import { svgIcons } from "./Logos";

export interface ILogos {
    logoName?: keyof typeof svgIcons,
    styleName?: string
}