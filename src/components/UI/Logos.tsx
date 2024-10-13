import React from "react";
import styles from './Logos.module.scss'

import ReactLogo from '../../assets/logos/react.svg?react'
import Redux from '../../assets/logos/redux.svg?react'
import ReactRouter from '../../assets/logos/react-router.svg?react'
import Css from '../../assets/logos/css3.svg?react'
import ReactHookForm from '../../assets/logos/react-hook-form.svg?react'
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

import Telegram from '../../assets/icons/telegram.svg?react'
import { ILogos } from "./Logos.props";

const svgSkills = [
    { ReactLogo, title: 'React', id: 1 },
    { Redux, title: 'Redux', id: 2 },
    { TypeScript, title: 'TypeScript', id: 3 },
    { JavaScript, title: 'JavaScript', id: 4 },
    { ReactRouter, title: 'React Router', id: 5 },
    { ReactHookForm, title: 'React Hook Form', id: 6 },
    { Html, title: 'HTML5', id: 7 },
    { Css, title: 'CSS3', id: 8 },
    { Sass, title: 'Sass', id: 9 },
    { Webpack, title: 'Webpack', id: 10 },
    { Vite, title: 'Vite', id: 11 },
    { Dndkit, title: 'Dnd Kit', id: 12 },
    { Strapi, title: 'Strapi', id: 13 },
    { Axios, title: 'Axios', id: 14 },
    { Git, title: 'Git', id: 15 },
    { Figma, title: 'Figma', id: 16 }
]

export const svgIcons = {
    tg: Telegram
}

const Logos = ({ logoName, styleName }: ILogos) => {

    const Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = svgIcons[logoName!];

    return (
        <>
            {logoName ? <Logo className={styleName} /> :
                <>
                    {svgSkills.map((i, index) => {
                        const title = Object.keys(i)[0] as keyof typeof svgSkills[index]
                        const Logo = i[title] as React.FunctionComponent<React.SVGProps<SVGSVGElement>>

                        return (
                            <div key={i.id} className={styles['card']}>
                                <div className={styles['card__inner']}>
                                    <Logo key={index} className={styles['card__logo']} />
                                    <div>{i.title}</div>
                                </div>
                            </div>
                        )
                    })}
                </>
            }
        </>
    )
}

export default Logos;