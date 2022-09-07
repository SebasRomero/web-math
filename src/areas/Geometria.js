import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Cards from '../components/Cards'
import matrices from '../images/Braid-modular-group-cover.svg.png'
import geometriaAnalitica from '../images/geoAnalitica.png'
import funcTrigo from '../images/funcTrigo.png'
import series from '../images/series.png'
import Navigation from '../components/Navigation'
import Home from '../components/Home'
import { useAuth } from '../context/AuthContext'
<link rel="stylesheet" href="../styles/style-index.css"></link>

const Geometria = () => {
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
						<h3>Geometría</h3>
						<p>La geometría es una rama de las matemáticas que se ocupa del estudio de las propiedades de las figuras en el plano o el espacio, incluyendo: puntos, rectas, planos, politopos (como paralelas, perpendiculares, curvas, superficies, polígonos, poliedros, etc.).
							La geometría es una de las ciencias más antiguas. Inicialmente, constituía un cuerpo de conocimientos prácticos en relación con las longitudes, áreas y volúmenes.
							Sus orígenes se remontan a la solución de problemas concretos relativos a medidas. Tiene su aplicación práctica en física aplicada, mecánica, arquitectura, geografía, cartografía, astronomía, náutica, topografía, balística, etc., y es útil en la preparación de diseños e incluso en la fabricación de artesanía.
						</p>

						<h3 className="">Temas</h3>
					</section>
					<ul className="d-flex list-inline mx-auto justify-content-center">
						<div className="px-4"><Cards message="Lineas Rectas" /></div>
						<div className="px-4"><Cards message="Ángulos" /></div>
						<div className="px-4"><Cards message="Cuadrilateros Trigonométricas" /></div>
					</ul>

					<ul className="d-flex list-inline mx-auto justify-content-center">
						<div className="px-4"><Cards message="Triángulos" /></div>
						<div className="px-4"><Cards message="Teorema de pitágoras" /></div>
						<div className="px-4"><Cards message="Congruencia" /></div>
					</ul>

					<ul className="d-flex list-inline mx-auto justify-content-center">
						<div className="px-4"><Cards message="Área y perímetro" /></div>
						<div className="px-4"><Cards message="Volúmen y área de la superficie" /></div>
						<div className="px-4"><Cards message="Circulos" /></div>
					</ul>

					<ul className="d-flex list-inline mx-auto justify-content-center">
						<div className="px-4"><Cards message="Geometría analítica" /></div>
						<div className="px-4"><Cards message="Construcciones geométricas" /></div>
						<div className="px-4"><Cards message="Semejanzas" /></div>
					</ul>

					<ul className="d-flex list-inline mx-auto justify-content-center">
						<div className="px-4"><Cards message="Plano coordenado" /></div>
						<div className="px-4"><Cards message="Figuras" /></div>
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

export default Geometria