import { Global, css } from '@emotion/react'
import Header from './components/header'
import SectionHome from './components/sectionHome'
import SectionTecnologies from './components/sectionTecnologies'
import SectionProjects from './components/sectionProjects'


//#3b82f6, #021b79, #eaeaea
function App() {
  return (
    <>
        <Global
          styles={css`
            body{
              background: #0c183a;
              background: linear-gradient(to bottom, #001427, #050e2b);
              background-size: 100% 100%;
              background-repeat: no-repeat;
              background-attachment: 'fixed';
              font-family: sans-serif;
            }
          `}
        />
      <Header/>
      <SectionHome/>
      <SectionTecnologies/>
      <SectionProjects/>
    </>
  )
}



export default App
