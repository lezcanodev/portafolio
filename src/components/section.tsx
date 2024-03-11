import { css  } from '@emotion/react';

interface PropChildren{
    children: React.ReactNode
}

SectionPortafolio.Header = ({children}: PropChildren) => {
    return <div css={css`margin-top:40px;  `}>
        <div css={css`text-align:center; color: #3b82f6; font-weight:bold; font-size:2em;`}>{children}</div>
        
        <span css={css`display:block; border-bottom:1px solid#eaeaea; margin:auto; margin-top:20px; max-width:100px;  `}></span>
    </div>
}

export default function SectionPortafolio(props: PropChildren & {fullWidth?:boolean; id: string; css?: {[key: string]: any}}){
    return <>
        <section id={props.id} css={css({
            maxWidth: (typeof props.fullWidth !== 'undefined' && props.fullWidth) ? 'auto' : 800,
            margin:'auto',
            padding: '10px 10px',
            fontSize: '1em',
            color: '#f1f5f9',
            minHeight: '100vh',
            ...props.css
        })}>
            {props.children}
        </section> 
    </>
}