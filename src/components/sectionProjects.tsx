import { css } from '@emotion/react';
import SectionPortafolio from './section';
import { Project, ProjectProps } from './project';
import TodolistImage from '../assets/todolist.jpeg';
import PokeApiImage from '../assets/pokeapi.png';
import LeadboradImage from '../assets/leadborad.jpeg';
import EccomerceImage from '../assets/eccomerce.png';
import RouterImage from '../assets/router.png';
import InventoryImage from '../assets/inventory.png';
import CleanImage from '../assets/clean.jpg';
import BankingImage from '../assets/banking.png';
import MenuImage from '../assets/menu.png';
import AppReservaImage from '../assets/appreserva.png';
import { useState } from 'react';

const languagesNames = ['Todos', 'Javascript', 'Typescript', 'Php', 'Java'];

const dataProjects: ProjectProps[] = [
    {title: 'App Reserva',
    image: AppReservaImage,
    linkGithub: 'https://github.com/lezcanodev/app-reserva',
    shortDescription:'App simple para registrar reservas',
    tecnologyNames: ['Express', 'Mysql', 'Typeorm', 'Typescript', 'React'],
    features: [
      'Recursos: persona, habitacion, reserva',
      'CRUD para cada recurso',
      'testing del backend con jest, supertest'
    ]},
    {title: 'Todolist',
    image:TodolistImage ,
    linkGithub: 'https://github.com/lezcanodev/todolist',
    shortDescription:'App para registro de tareas y objectivos',
    tecnologyNames: ['Express', 'Mongoose', 'Mongodb' ,'React', 'Javascript'],
    features: ['Autenticación con JWT','Operaciones CRUD para las tareas','Cada tarea puede tener uno o mas objectivos','Operaciones de busqueda, filtros y ordenacion','Carga de tareas con infinite scrolling']
    },
    {title: 'React',
     image: PokeApiImage,
     linkGithub: 'https://github.com/lezcanodev/pokeapi-spa-react-app',
     shortDescription:'App de React interactuando con una API RESTFUL',
     tecnologyNames: ['React','Javascript', 'PokeApi'],
     features: ['Filtrar elementos por sus atributos', 'Busqueda de elementos', 'Guardado de elementos']
    },
    {title: 'Simulador web banking',
    image: BankingImage,
    linkGithub: 'https://github.com/lezcanodev/SimuladorWebBanking---POO',
    shortDescription:'Proyecto de universidad',
    tecnologyNames: ['Java'],
    features: [
      'El objetivo de la app es el diseño y analisis orientado a objetos',
      `Para realizar la app primero se realizo un analisis el cual se represento con un diagramas de caso de uso, luego
       se realizo un diagrama orientado a objetos antes del desarrollo de la app`,
     ]},
     {title: 'Menu',
     image: MenuImage,
     linkGithub: 'https://github.com/lezcanodev/Restaurante',
     shortDescription:'Proyecto frontend',
     tecnologyNames: ['Html5', 'Tailwinds', 'react'],
     features: [
       'App hecha mayormente con html5 y tailwinds, react solo se utiliza en la seccion de comidas',
      ]},
    {title: 'Sistema de inventario simple',
    image: InventoryImage,
    linkGithub: 'https://github.com/lezcanodev/Simple-inventory-managent-system-Laravel',
    shortDescription:'Sistema de inventario simple hecho en laravel',
    tecnologyNames: ['Laravel','Php', 'Mysql', 'CSS/Boostrap'],
    features: [
      'Sistema de registro',
      'Sistema de session con cookies',
      'Incluye 5 modulos: Producto, Proveedor, Categoría, Usuario, Roles',
      'El administrador puede crear roles y asignarles las operaciones que tendran permitido',
    ]},
    {title: 'Arquitectura limpia',
    image: CleanImage,
    linkGithub: 'https://github.com/lezcanodev/Typescript-Clean-Architecture',
    shortDescription:'Mi intento de implemention de un arquitectura limpia',
    tecnologyNames: ['Typescript'],
    features: [
      'Aplicacion de los principios SOLID',
      'App desarrollada con un enfoque que los frameworks, base de datos, etc son solo detalles',
      'Las capas de aplicacion y dominio son encargadas de la logica de negocio y casos de uso',
      'Los casos de uso solo dependen de abstraciones para evitar acoplamiento a una implementacion',
     ]},
    {title: 'Leaderboard',
    image: LeadboradImage,
    linkGithub: 'https://github.com/lezcanodev/leaderboard',
    shortDescription:'App con SSR con Ejs',
    tecnologyNames: ['Postgres', 'Express', 'Typescript', 'Typeorm', 'Ejs'],
    features: ['Uso de una funcion window (sql) para obtener las competiciones con todos sus ganadores']
   },
   {title: 'Eccomerce API',
   image: EccomerceImage,
   linkGithub: 'https://github.com/lezcanodev/eccomerce',
   shortDescription:'REST API de un eccomerce + un frontend simple con react',
   tecnologyNames: ['Postgres', 'Express', 'Typescript', 'Typeorm', 'React'],
   features: [
     'Autenticación con JWT ',
     'API con versionamiento',
     'Categorías que pueden contener subcategorías, y estas subcategorías a su vez pueden tener más subcategoría',
     'Manejo de subida de imagenes con formidable',
     'Validación de datos con AJV'
    ]
  },
  {title: 'Router Php',
  image: RouterImage,
  linkGithub: 'https://github.com/lezcanodev/SIMPLE-PHP-ROUTER',
  shortDescription:'Router para manejar peticiones HTTP',
  tecnologyNames: ['Php'],
  features: [
    'Añadir rutas get,post,delete,put',
    'Añadir parametros a las URI',
    'Añadir middlewares',
    'Añadir alias o nombres a las rutas',
   ]
 }
]

export default function SectionProjects({id}: {id: string}){

    const [projects, setProjects] = useState(dataProjects);

    const handleClickLenguageName = (e: React.MouseEvent) => {
      const target = e.target;
      if(target instanceof HTMLDivElement){
        const lenguageName = target.dataset.lenguagename;
        if(typeof lenguageName === 'undefined') return;
        const newProjects = lenguageName === 'Todos' ? dataProjects : dataProjects.filter(lg => lg.tecnologyNames.includes(lenguageName));
        setProjects(newProjects);
      }
    }

    return <SectionPortafolio fullWidth={true} id={id} css={css`background-color: red; `} >
                <SectionPortafolio.Header>
                    Proyectos
                </SectionPortafolio.Header>
                <div onClick={handleClickLenguageName} css={css`
                  display: flex;
                  flex-wrap: wrap;
                  justify-content:center;
                  gap:10px;
                  max-width: 600px;
                  margin:auto;
                  margin-top: 20px;
                  & > div{
                    cursor: pointer;
                    width: 85px;
                    padding: 4px 5px;
                    color: #3b82f6;
                    border: 1px solid #eaeaea66;
                    background-color: #eaeaea;
                    border-radius: 8px;
                    text-align:center;
                  }
                `}>
                  {languagesNames.map((lenguageName) => (
                    <div key={`lenguageName-${lenguageName}`} data-lenguagename={lenguageName}>
                      {lenguageName}
                    </div>
                  ))}
                </div>
                <div css={css`margin-top:50px;`}>
                    <div css={css`margin:auto; padding: 10px 60px; text-align:center;`}>
                      resultados: {projects.length}
                    </div>
                    <div css={css`
                        display:flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        gap:15px;
                    `}>
                        {projects.map((project) => (
                            <Project
                                key={`project-${project.title}`}
                                {...project}
                            />
                        ))}
                    </div>
                </div>
            </SectionPortafolio>  
}