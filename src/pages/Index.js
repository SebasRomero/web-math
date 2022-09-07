import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Cards from '../components/Cards'
import matrices from '../images/Braid-modular-group-cover.svg.png'
import geometriaAnalitica from '../images/geoAnalitica.png'
import funcTrigo from '../images/funcTrigo.png'
import series from '../images/series.png'
import back from '../images/fondo.jpg'
import Navigation from '../components/Navigation'
import { context, useAuth } from '../context/AuthContext'
import Home from '../components/Home'
import Alert from '../components/Alert'

<link rel="stylesheet" href="../styles/style-index.css"></link>


const Index = () => {
    const contentColor = {
        'backgroundColor': 'antiquewhite'
    }
    const backImage = {
        'backgroundColor': 'black',
    }
    const { user } = useAuth()

    return (
        <div className="d-flex align-items-center justify-content-center px-5 p-4 " style={backImage}>
            {/* <head>
                <meta charset="utf-8"></meta>
                <link rel="icon" href="images/icono.png" />
                <script src="resources/js/index.js"></script>
            </head> */}
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
            <title>Matemáticas</title>
            <body id="body">
                <div id="content" className="" style={contentColor}>
                    <header id="header" className="bg-dark p-1">
                        <p />
                        <h1 className="text-center text-light ">MATEMÁTICAS</h1>
                    </header>

                    <nav className="navbar navbar-dark bg-dark" id="nav-main">
                        <div className="container-fluid">
                            <div className="d-flex" id="navbarNav">
                                <Navigation name={"Inicio"} path={"/index"} />
                                <Navigation name={"Aritmetica"} path={"/aritmetica"} />
                                <Navigation name={"Algebra"} path={"/algebra"} />
                                <Navigation name={"Geometria"} path={"/geometria"} />
                                <Navigation name={"Calculo"} path={"/calculo"} />
                                <Navigation name={"Estadistica"} path={"/estadistica"} />
                                <Navigation name={"Trigonometria"} path={"/trigonometria"} />
                                {
                                    user === null ? (
                                        <>
                                            <Navigation name={"Log in"} path={"/login"} />
                                            <Navigation name={"Sign in"} path={"/register"} />
                                        </>
                                    ) : (
                                        <div className="">

                                            <Home />
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    </nav>

                    <a href="index.html" id="spanish">
                        <img src="https://s3.amazonaws.com/staticcuc/media/mod_languages/images/es_co.gif" alt="Español" title="Español" />
                    </a>
                    <a href="index-En.html" id="english">
                        <img src="https://s3.amazonaws.com/staticcuc/media/mod_languages/images/en_us.gif" alt="English" title="English" />
                    </a>

                    <section className="p-3">
                        <h3>¿Qué son las matemáticas?</h3>
                        <p> Hoy día, las matemáticas
                            se usan en todo el mundo como una herramienta esencial en muchos campos, entre los que se
                            encuentran las ciencias naturales, la ciencias aplicadas, las humanidades, la medicina y las
                            ciencias sociales, e incluso disciplinas que, aparentemente, no están vinculadas con ella,
                            como la música (por ejemplo, en cuestiones de resonancia armónica).
                        </p>

                        <h3 className="">Temas agregados recientemente</h3>
                    </section>
                    <ul className="d-flex list-inline mx-auto justify-content-center">
                        <div className="px-4"><Cards message="Matrices" image={matrices} /></div>
                        <div className="px-4"><Cards message="Geometría Analítica" image={geometriaAnalitica} /></div>
                    </ul>

                    <ul className="d-flex list-inline mx-auto justify-content-center">
                        <div className="px-4"><Cards message="Funciones Trigonométricas" image={funcTrigo} /></div>
                        <div className="px-4"><Cards message="Series" image={series} /></div>
                    </ul>

                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active" aria-current="page">Inicio</li>
                        </ol>
                    </nav>

                    <img src="images/cuc.png" id="cucFooter" alt="logo" className="bg-dark"></img>
                    <img src="images/Departamento.png" id="dptFooter" alt="logo" className="bg-dark"></img>
                    <div id="footer0" className="bg-dark" />
                    <div id="footer1" className="bg-dark" />
                    <div id="footer2" className="bg-dark" />



                </div>
            </body>
        </div>
    )
}

export default Index