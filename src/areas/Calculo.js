import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Cards from '../components/Cards'
import matrices from '../images/Braid-modular-group-cover.svg.png'
import geometriaAnalitica from '../images/geoAnalitica.png'
import funcTrigo from '../images/funcTrigo.png'
import series from '../images/series.png'
import back from '../images/fondo.jpg'
import Navigation from '../components/Navigation'
import { useAuth } from '../context/AuthContext'
import Home from '../components/Home'
<link rel="stylesheet" href="../styles/style-index.css"></link>
const Calculo = () => {
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

                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="nav-main">
                        <div className="container-fluid">
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <Navigation name = {"Inicio"} path = {"/index"}/>
                                    <Navigation name = {"Aritmetica"} path = {"/aritmetica"}/>
                                    <Navigation name = {"Algebra"} path = {"/algebra"}/>
                                    <Navigation name = {"Geometria"} path = {"/geometria"}/>
                                    <Navigation name = {"Calculo"} path = {"/calculo"}/>
                                    <Navigation name = {"Estadistica"} path = {"/estadistica"}/>
                                    <Navigation name = {"Trigonometria"} path = {"/trigonometria"}/>
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
                                </ul>
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
                        <h3>Cálculo</h3>
                        <p>En general el término cálculo hace referencia al resultado correspondiente a la acción de calcular. Calcular, por su parte, consiste en realizar las operaciones necesarias para prever el resultado de una acción previamente concebida, o conocer las consecuencias que se pueden derivar de unos datos previamente conocidos.
                            No obstante, el uso más común del término «cálculo» es el lógico-matemático. Desde esta perspectiva, el cálculo consiste en un procedimiento mecánico o algoritmo, mediante el cual podemos conocer las consecuencias que se derivan de las variables previamente conocidas debidamente formalizadas y simbolizadas.
                        </p>

                        <h3 className="">Temas</h3>
                    </section>
                    <ul className="d-flex list-inline mx-auto justify-content-center">
						<div className="px-4"><Cards message="Límites y continuidad" /></div>
						<div className="px-4"><Cards message="Calcular derivadas" /></div>
						<div className="px-4"><Cards message="Métodos de integración" /></div>
					</ul>

					<ul className="d-flex list-inline mx-auto justify-content-center">
						<div className="px-4"><Cards message="Aplicaciones de la integral" /></div>
						<div className="px-4"><Cards message="Integración" /></div>
						<div className="px-4"><Cards message="Series" /></div>
					</ul>

					<ul className="d-flex list-inline mx-auto justify-content-center">
						<div className="px-4"><Cards message="Aplicaciones de derivada" /></div>
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

export default Calculo