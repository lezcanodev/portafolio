import { css } from '@emotion/react';

export interface TecnologyProps{
    icon: string;
    name: string;
}

export default function Tecnology({icon, name}: TecnologyProps){
    return (
    <article css={css`
        display:grid; 
        justify-content: center;
        gap:5px;
        background-color:#3b82f619;
        background: linear-gradient(to bottom, #0156a6, #050e2b 90%);

        padding: 15px 10px;
        border-radius: 10px;
      
        div,img,h3{
            margin:0;
            padding:0;
        }
        `}>
        <div css={css`width:90px; height:80px;`}>
            <img src={icon} alt="react" css={css`width:100%; height:100%; object-fit:contain;`} />
        </div>
        <div css={css`font-size:.8em; text-align: center;`}>
            <h3>{name}</h3>
        </div>
    </article>)  
}