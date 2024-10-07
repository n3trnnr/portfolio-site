import React from "react";
import styles from './Logos.module.scss'

import ReactLogo from '../../assets/logos/react.svg?react'
import Redux from '../../assets/logos/redux.svg?react'
import ReactRouter from '../../assets/logos/react-router.svg?react'
import Css from '../../assets/logos/css3.svg?react'
import ReacHookForm from '../../assets/logos/react-hook-form.svg?react'
import Dndkit from '../../assets/logos/dnd-kit.svg?react'
import Figma from '../../assets/logos/figma.svg?react'
import Git from '../../assets/logos/git.svg?react'
import Html from '../../assets/logos/html5.svg?react'
import JavaScript from '../../assets/logos/javascript.svg?react'
import TypeScript from '../../assets/logos/typescript.svg?react'
import Sass from '../../assets/logos/sass.svg?react'
import Strapi from '../../assets/logos/strapi.svg?react'
import Vite from '../../assets/logos/vite.svg?react'
import Webpack from '../../assets/logos/webpack.svg?react'
import Axios from '../../assets/logos/axios.svg?react'

const svgArr = [
    ReactLogo,
    Redux,
    TypeScript,
    JavaScript,
    ReactRouter,
    ReacHookForm,
    Html,
    Css,
    Sass,
    Webpack,
    Vite,
    Dndkit,
    Strapi,
    Axios,
    Git,
    Figma
]

const Logos = () => {
    return (
        <div className={styles['logos']}>
            {svgArr.map((i, index) => {
                const Logo = i as React.FunctionComponent<React.SVGProps<SVGSVGElement>>
                return (
                    <Logo key={index} />
                )
            })}
        </div>
    )
}

export default Logos;