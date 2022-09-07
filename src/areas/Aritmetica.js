import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Cards from '../components/Cards'
import { context, useAuth } from '../context/AuthContext'
import back from '../images/fondo.jpg'
import Navigation from '../components/Navigation'
import Home from '../components/Home'
<link rel="stylesheet" href="../styles/style-index.css"></link>

const Aritmetica = () => {
	const contentColor = {
		'backgroundColor': 'antiquewhite'
	}
	const backImage = {
		'backgroundColor': 'black',
	}
	const { user } = useAuth()

	return (
		<div className="d-flex align-items-center justify-content-center px-5 p-4 " style={backImage}>
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
						<h3>Aritmética</h3>
						<p>La aritmética es la rama de la matemática cuyo objeto de estudio son los números y las operaciones elementales
							hechas con ellos: adición, sustracción, multiplicación y división.
							Al igual que en otras áreas de la Matemática, como el Álgebra o la Geometría, el sentido de la «Aritmética» ha ido
							evolucionando con el amplio y diversificado desarrollo de las ciencias. Originalmente, la Aritmética se desarrolló de
							manera formal en la Antigua Grecia, con el refinamiento del rigor matemático y las demostraciones, y su extensión a
							las distintas disciplinas de las «Ciencias Naturales». En la actualidad, puede referirse a la Aritmética Elemental,
							enfocada a la enseñanza de la Matemática Básica; también al conjunto que reúne el Cálculo Aritmético y las
							Operaciones Matemáticas, específicamente, las cuatro Operaciones Básicas aplicadas, ya sea a números (números
							naturales, números enteros, números fraccionarios y números decimales, etc.) como a entidades matemáticas más
							abstractas (matrices, operadores, etc.); también a la así llamada alta aritmética, conocida como Teoría de Números.
						</p>

						<h3 className="pb-5">Temas</h3>
					</section>
					<ul className="d-flex list-inline mx-auto justify-content-center">
						<div className="px-4"><Cards message="Valor posicional" path="/valorposicional" name="Valor posicional" /></div>
						<div className="px-4"><Cards message="Sumas y restas" /></div>
						<div className="px-4"><Cards message="Multiplicación y división" /></div>
					</ul>
					<ul className="d-flex list-inline mx-auto justify-content-center">
						<div className="px-4"><Cards message="Números negativos" /></div>
						<div className="px-4"><Cards message="Fracciones" /></div>
						<div className="px-4"><Cards message="Decimales" /></div>
					</ul>
					<br />
					<br />

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

export default Aritmetica