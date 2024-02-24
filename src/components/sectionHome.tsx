import { css } from '@emotion/react';
import SectionPortafolio from './section';
import GithubIcon from  '../assets/github.svg';
import LinkedinIcon from  '../assets/linkedin.svg';
import CV from '../assets/cv.pdf';

export default function SectionHome({id}: {id: string}){
    return <SectionPortafolio id={id}>
                <div css={css`margin-top:40px; `}>
                    <span css={css`color: #3b82f6; font-weight:bold; font-size:5em;`}>Ismael Gonzalez</span>
                    <br />
                    <span css={css`font-size:1em; font-weight:bold; `}>Desarrollador web junior</span>
                    <span css={css`display:block; border-bottom:1px solid#3b82f6; margin:0; margin-top:20px; max-width:100px;  `}></span>
                </div>
                <div css={css`padding: 0 10px; max-width: 400px; margin-top:30px;`}>
                <p>Me gusta siempre estar aprendiendo nuevas cosas y llevarlas a la practica como tambien dispuesto a afrontar nuevos desafios</p>
                <p>Actualmente tengo 23 años y estoy cursando el 4° semestre de la carrera de Ingeniería Informatica</p>
                </div>
                <div css={css`
                    display: flex;
                    justify-content: flex-end;
                    max-width: 250px;
                    gap:10px;
                    padding-left: 20px;
                    a{
                        display: block;
                        width: 40px;
                        height: 40px;
                        padding: 0 5px;
                        border-radius: 10px;
                        background: linear-gradient(to bottom, #045fb45b, #18275546);

                    }
                    a.cv{
                        box-sizing:border-box;
                        width: 100%;
                        color: #eaeaea;
                        padding-top: 11px;
                        text-decoration: none;
                        text-align: center;
                    }
                    a:hover{
                        background: linear-gradient(to bottom, #182755, #045fb4);
                    }
                    img{
                        width: 100%;
                        height:100%;
                        object-fit: cover;
                    }
                `}>
                    <a href="https://github.com/lezcanodev" target='_blank' css={css``}>
                        <img src={GithubIcon} alt="" />
                    </a>
                    {/*<a href={CV} target='_blank' css={css``}>
                        <img src={LinkedinIcon} alt="" />
                    </a>*/}
                    <a href={CV} target='_blank' className='cv'>
                        descargar CV
                    </a>
                </div>

            </SectionPortafolio>  
}