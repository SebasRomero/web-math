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

const Algebra = () => {
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
                        <h3>Álgebra</h3>
                        <p>El álgebra es la rama de la matemática que estudia la combinación de elementos de estructuras abstractas
                            acorde a ciertas reglas. Originalmente esos elementos podían ser interpretados como números o
                            cantidades, por lo que el álgebra en cierto modo originalmente fue una generalización y extensión
                            de la aritmética. En el álgebra moderna existen áreas del álgebra que en modo alguno pueden considerarse
                            extensiones de la aritmética (álgebra abstracta, álgebra homológica, álgebra exterior, etc.).
                        </p>

                        <h3 className="">Temas</h3>
                    </section>

                    <ul className="d-flex list-inline mx-auto justify-content-center">
						<div className="px-4"><Cards message="Desigualdades" path ="/valorposicional" name="Valor posicional"/></div>
						<div className="px-4"><Cards message="Ecuaciones" /></div>
						<div className="px-4"><Cards message="Sucesiones" /></div>
                        <div className="px-4"><Cards message="Números complejos" /></div>
					</ul>
					<ul className="d-flex list-inline mx-auto justify-content-center">
						<div className="px-4"><Cards message="Sistemas de ecuaciones" /></div>
						<div className="px-4"><Cards message="Funciones" /></div>
						<div className="px-4"><Cards message="Modelación algebráica" /></div>
                        <div className="px-4"><Cards message="Sesiones cónicas" /></div>
					</ul>
                    <ul className="d-flex list-inline mx-auto justify-content-center">
						<div className="px-4"><Cards message="Vectores" /></div>
						<div className="px-4"><Cards message="Matrices" /></div>
					</ul>

                    <nav>
                        <ol className="breadcrumb">
                            
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

export default Algebra