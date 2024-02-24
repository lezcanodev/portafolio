import { css } from '@emotion/react';
import GithubIcon from '../assets/github.svg';


export interface ProjectProps{
    title: string;
    image: string;
    tecnologyNames: string[];
    linkGithub: string;
    shortDescription: string;
    features: string[];
}

export function Project(props: ProjectProps){
    return (
        <article css={css`
            display:grid;
            grid-template-rows: 1fr 1fr;
            position:relative;
            border-radius: 10px;
            overflow: hidden;
            max-width: 300px;
            background-color: rgba(59, 131, 246, 0.056);
        `}
        >
            <div css={css`
                background-color:red; 
                width:100%;
      
                img{
                    width:100%;
                    height:100%;
                    object-fit:cover;
                }
                `}>
                <img src={props.image} alt="" />
            </div>
            <div css={css`
                display:flex;
                flex-direction: column;
                justify-content: space-between;
                height:100%;
                padding: 0px 8px;
                *{
                    margin:0;
                    padding:0;
                }
                h4{
                    color:#3b82f6;
                    font-size: 1.4em;
                }
            `}>
                <div>
                    <div css={css`padding-top:10px; margin-bottom:15px;`}>
                        <h4>{props.title}</h4>
                        <p css={css`font-size:.8em; font-weight:100;`}>
                            {props.shortDescription} 
                        </p>
                    </div>
                    <div css={css`
                        display:flex; 
                        flex-wrap: wrap;
                        gap:10px;
                        span{
                            font-weight:bold;
                            font-size: .8em;
                            color: #3b82f6;
                            background-color: #eaeaea22;
                            padding: 2px 10px;
                            border-radius: 5px;
                        }    
                    `}>
                        {props.tecnologyNames.map((name) => (
                            <span key={`${props.title}${name}`}>{name}</span>
                        ))}
                    </div>
                </div>

                <div css={css`
                    display:flex;
                    flex-wrap: wrap;
                    gap:2px;
                    padding: 0 8px;
                    padding-top: 20px;
                    justify-content:center;
                    a{
                        display:block;
                        width: 30px; 
                        height: 30px;
                        padding: 10px 8px;
                        padding-bottom: 10px;
                        border-top-right-radius: 20px;
                        border-top-left-radius: 20px;
                        background-color:#3b83f63f;
                        border-bottom:2px solid #eaeaea8e;
                    }
                    a:hover{
                        background-color:#3b83f6c2;
                        border-bottom:2px solid #eaeaea;
                    }
                    img{
                        width:100%;
                        height:100%;
                        object-fit:cover;
                    }
                `}>
                    <a href={props.linkGithub} target='_blank'>
                        <img src={GithubIcon} alt="" />
                    </a>
                </div>
             
                <div css={css`
                    position:absolute;
                    box-sizing:border-box;
                    top:80%;
                    left:80%;
                    width: 100%;
                    height: 100%;
                    background-color: #0431797d;
                    backdrop-filter: blur(10px);
                    padding: 12px;
                    transition: all 500ms;
                    border-top-left-radius: 100px;
                    border:1px solid white;
                    opacity: .3;
                    &:hover{
                        top:0;
                        left:0;
                        border-top-left-radius: 0px;
                        border:1px solid transparent;
                        opacity: 1;
                    }
                    ul{
                        list-style: none;
                        display:grid;
                        gap:8px;
                    }
                    li::before{
                        content: '📌 ';
                        font-size: .7em;
                    }
                `}>
                    <div>
                        <h5 css={css`margin-bottom:15px; font-size:1.4em; color: #eaeaea; `}>Características</h5>
                        <ul>
                            {props.features.map(feature => (
                                <li key={`${props.title}${feature}`}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </article>
    )
}
