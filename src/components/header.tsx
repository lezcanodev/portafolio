import { css } from '@emotion/react';


export default function Header(){
    return <header css={css`
      padding: 0px 10px;
    `}>
        <nav css={css`
          background-color: rgba(59, 131, 246, 0.767);
          box-shadow: 0 0 100px rgba(59, 131, 246, 0.774);
          color: #eaeaea;
          display: flex;
          gap: 10px;
          max-width: 600px;
          margin:auto;
          padding: 15px 10px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          font-weight: bold;
          justify-content: center;
          a{
            color:#eaeaea;
            text-decoration: none;
          }
        `}>
          <div>
            <a href="#sectionHome">
              Inicio
            </a>
          </div>
          <div>
            <a href="#sectionProjects">
              Proyectos
            </a>
          </div>
          <div>
            <a href="#sectionTecnologies">
              Tecnologías
            </a>
          </div>
        </nav>
    </header>
  }