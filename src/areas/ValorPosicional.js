import React from 'react'
import { context, useAuth } from '../context/AuthContext'
import Navigation from '../components/Navigation'
import Home from '../components/Home'; 
<link rel="stylesheet" href="../styles/style-index.css"></link>

const ValorPosicional = () => {
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
                                            <Home/>
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
						<h3>Valor posicional</h3>
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
						<p>
							Ejemplos:
							13.4<br></br>

							Su escritura con respecto a la posición sería: Trece enteros punto cuatro decimos.<br></br>
							Valor posición de cada número:<br></br>
							10: Corresponde a 1 decena.<br></br>
							3: Corresponde a 3 unidades.<br></br>
							0.4: Corresponde a 4 décimos.<br></br>

						</p>
						<p>
							2.05<br></br>
							Su escritura con respecto a la posición sería: Dos enteros punto cinco centésimos.<br></br>
							Valor posición de cada número:<br></br>
							2: Corresponde a 2 unidades.<br></br>
							0.05: Corresponde a 5 centésimos.<br></br>
						</p>
						<p>
							15.207<br></br>

							Su escritura con respecto a la posición sería: Quince enteros punto doscientos siete milésimos. <br></br>
							Valor posición de cada número:<br></br>
							10: Corresponde a 1 decena.<br></br>
							5: Corresponde a 1 unidad.<br></br>
							0.2: Corresponde a 2 décimos.<br></br>
							0.007: Corresponde a 7 milésimos.<br></br>


						</p>	
						<hr/>
						<h5 className="text-center">¿Necesitas más ayuda? Uno de nuestros tutores podría ayudarte...</h5>
						{
                                    user === null ? (
                                        <>
                                            <Navigation name={"Sign in"} path={"/register"} />
                                        </>
                                    ) : (
                                        <div className="">
											<Navigation name={"Solicitar tutor"} path={"/tutor"} />
                                        </div>
                                    )

                                }

					</section>

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

export default ValorPosicional