import { css } from '@emotion/react';
import Tecnology, { TecnologyProps } from './tecnology';

interface TecnologiesProps{
    tecnologies: TecnologyProps[]
}


export default function Tecnologies({tecnologies}: TecnologiesProps){
    return (
        <div css={css`
            display:flex;
            flex-wrap: wrap;
            gap:10px;
            justify-content:center;
            padding: 10px 0px;
        `}>
            {tecnologies.map((tecnology, index) => (
                <Tecnology
                    key={index}
                    {...tecnology}
                />
            ))}
            
        </div>
    )
}