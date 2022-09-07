import React from 'react'

import Navigation from '../components/Navigation'
import { useAuth } from '../context/AuthContext'
import { useFirestore } from '../hooks/useFirestore'
import Cards from './Cards'
import Home from './Home'
<link rel="stylesheet" href="../styles/style-index.css"></link>

const Tutor = () => {
    
    const { user } = useAuth();
    const { data, error, loading } = useFirestore();
    if (loading) return <p>Loading data...</p>
    if (error) return <p>{error}</p>

    const contentColor = {
        'backgroundColor': 'antiquewhite'
    }
    const backImage = {
        'backgroundColor': 'black',
    }


    return (
        <div className="" style={backImage}>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
            <title>Matemáticas</title>
            <body id="body" className="">
                <div id="content" className="" style={contentColor}>
                    <header id="header" className="bg-dark p-1">
                        <p />
                        <h1 className="text-center text-light ">MATEMÁTICAS</h1>
                    </header>

                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark " id="nav-main">
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
                        <h3 className="text-center">¡Estos son los tutores que tenemos en disponibilidad!</h3>
                        <p>Nuestros tutores son profesionales dedicados en distintas áreas específicas en torno a las matemáticas, cálculos y demás. Punto a destacar referente a los profesores
                            de EzMaths es su manera didáctica de enseñar, además de no ser sólo un tutor, sino más que todo alguien con quien puedas conversar sin necesidad de estar obligado a 
                            realizar tus actividades pertinentes.
                        </p>
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                                <div className="card">
                                    {/* <div className="px-4"><Cards message="Alexis De La Hoz" image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XSZAFm-5JI7nriDLwZqRQQHaE7%26pid%3DApi&f=1"} /></div> */}

                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    {/* <div className="px-4"><Cards message="Patricia Fernandez" image={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthispix.com%2Fwp-content%2Fuploads%2F2015%2F06%2FCopy-of-Edit-1798-1.jpg&f=1&nofb=1"} /></div> */}
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">

                        {
                            data.map((item) => (
                                <div className="" key={item.email}>
                                    <div className="">
                                        {item.name === "Patricia Fernandez" ? (<div className="card px-4"><Cards message={item.name} image={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthispix.com%2Fwp-content%2Fuploads%2F2015%2F06%2FCopy-of-Edit-1798-1.jpg&f=1&nofb=1"} /></div>) : null}
                                        {item.name === "Alexis de la hoz" ? (<div className="card px-4"><Cards message={item.name} image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XSZAFm-5JI7nriDLwZqRQQHaE7%26pid%3DApi&f=1"} /></div>) : null}
                                        {item.name === "Linus Torvalds" ? (<div className="card px-4"><Cards message={item.name} image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdwaves.org%2Fwp-content%2Fuploads%2F2020%2F06%2Ftorvalds_in_nature.jpg&f=1&nofb=1"} /></div>) : null}
                                        {item.name === "Roberto Morales" ? (<div className="card px-4"><Cards message={item.name} image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Z2XqLspVmbYp-PYyQ2JVVwHaF7%26pid%3DApi&f=1"} /></div>) : null}
                                        
                                    </div>

                                </div>
                            ))
                        }
                        </div>
                        {/* <ul className="d-flex list-inline mx-auto justify-content-center">
                            <div className="px-4"><Cards message="Alexis De La Hoz" image={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XSZAFm-5JI7nriDLwZqRQQHaE7%26pid%3DApi&f=1"} /></div>
                            <div className="px-4"><Cards message="Patricia Fernandez" image={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthispix.com%2Fwp-content%2Fuploads%2F2015%2F06%2FCopy-of-Edit-1798-1.jpg&f=1&nofb=1"} /></div>
                            <div className="px-4"><Cards message="Armando Mendoza" image={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthispix.com%2Fwp-content%2Fuploads%2F2015%2F06%2FCopy-of-Edit-1798-1.jpg&f=1&nofb=1"} /></div>
                            <ul className="d-flex list-inline mx-auto justify-content-center">
                            <div className="px-4"><Cards message="Beatriz Pinzón" image={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthispix.com%2Fwp-content%2Fuploads%2F2015%2F06%2FCopy-of-Edit-1798-1.jpg&f=1&nofb=1"} /></div>
                            <div className="px-4"><Cards message="Linus Torvalds" image={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthispix.com%2Fwp-content%2Fuploads%2F2015%2F06%2FCopy-of-Edit-1798-1.jpg&f=1&nofb=1"} /></div>
                            <div className="px-4"><Cards message="Roberto Morales" image={"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fthispix.com%2Fwp-content%2Fuploads%2F2015%2F06%2FCopy-of-Edit-1798-1.jpg&f=1&nofb=1"} /></div>
                        </ul> */}


                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
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

export default Tutor