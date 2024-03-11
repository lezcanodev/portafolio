import { css } from '@emotion/react';
import SectionPortafolio from './section';
import Tecnologies from './tecnologies';
import ReactSVG from '../assets/react.svg';
import NodeSVG from '../assets/nodejs.svg';
import TypescriptSVG from '../assets/typescript.svg';
import ExpressjsSVG from '../assets/expressjs.svg';
import PostgresSVG from '../assets/postgres.svg';
import TypeormPNG from '../assets/typeorm.png';
import phpSVG from '../assets/php.svg';
import LaravelPNG from '../assets/laravel.png';
import MysqlPNG from '../assets/mysql.png';
import JavaSVG from '../assets/java.svg';
import PythonSVG from '../assets/python.svg';
import MongoDB from '../assets/mongodb.svg';
import MongoosePNG from '../assets/mongoose.png';

const mainTecnologies = [
    {name: 'React',
    icon: ReactSVG},
    {name: 'Node',
    icon: NodeSVG},
    {name: 'Typescript',
    icon: TypescriptSVG},
    {name: 'Express',
    icon: ExpressjsSVG},
    {name: 'TypeORM',
    icon: TypeormPNG},
    {name:'Postgres',
    icon: PostgresSVG}
]

const otherTecnologies: any = [
    {name:'Php',
    icon: phpSVG},
    {name:'Laravel',
    icon: LaravelPNG},
    {name:'Mysql',
    icon: MysqlPNG},
    {name:'Mongo',
    icon: MongoDB},
    {name:'Mongoose',
    icon: MongoosePNG}
]

const lastTecnologies: any = [
    {name:'Java',
    icon: JavaSVG},
    {name:'Python',
    icon: PythonSVG}
]

export default function SectionTecnologies({id}: {id: string}){
    return <SectionPortafolio id={id}>
                <SectionPortafolio.Header>
                    Tecnologías
                </SectionPortafolio.Header>
                <div css={css`margin-top:50px;`}>
                    <div css={css`
                        display:grid;
                        gap:20px;
                    `}>
                        <div>
                            <div css={css`margin-bottom:20px;`}>
                                <h2 css={css`color: #eaeaea; margin:0;`}>Principal</h2>
                                <span css={css`font-weight:100; font-size:.8em; `}>(tecnologias que estoy usando/practicando actualmente)</span>
                            </div>
                         
                            <Tecnologies 
                                tecnologies={mainTecnologies}
                            />

                        </div>

                        <div>
                            <div css={css`margin-bottom:20px;`}>
                                <h2 css={css`color: #eaeaea; margin:0;`}>Otros</h2>
                                <span css={css`font-weight:100; font-size:.8em; `}>(tecnologias que tengo experiencia en ellas, pero no las he utilizado por un tiempo)</span>
                            </div>
                            <Tecnologies 
                                tecnologies={otherTecnologies}
                            />
                        </div>

                        <div>
                            <div css={css`margin-bottom:20px;`}>
                                <h2 css={css`color: #eaeaea; margin:0;`}>Usados en la universidad</h2>
                                <span css={css`font-weight:100; font-size:.8em; `}>(tecnologias que he usado en la universidad y tengo un nivel basico)</span>
                            </div>
                            <Tecnologies 
                                tecnologies={lastTecnologies}
                            />
                        </div>
                    </div>
                </div>
            </SectionPortafolio>  
}