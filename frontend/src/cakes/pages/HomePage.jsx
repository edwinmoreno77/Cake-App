import { HashLink as Link } from 'react-router-hash-link';
import { useCake } from '../../hooks/useCake';
import { Slider } from '../../ui';




export const HomePage = () => {

    //por el momento solo tiene como finalidad cargar los
    //productos de manera que al darle click los muestre rapidamente.
    const { cakes: torta } = useCake();


    return (
        <>
            <Slider />

            <main id="homePage" className="bg-dark text-white py-5 bg-productos">
                <div className="container">
                    <h2 className="text-center mb-5 titulo-favoritos"><i>Productos Favoritos</i></h2>
                    <div className="text-center py-1">
                        <i className="bi bi-twitter mx-1 icon twitter-icon"><a href="https://www.instagram.com/fatima.afta/?hl=es" target="_blank" rel="noopener noreferrer"
                            className="text-decoration-none text-white">Fatima.afta</a></i>
                        <i className="bi bi-instagram mx-1 icon instagram-icon"><a
                            href="https://www.instagram.com/fatima.afta/?hl=es" target="_blank" rel="noopener noreferrer"
                            className="text-decoration-none text-white">Fatima.afta</a></i>
                        <i className="bi bi-facebook mx-1 icon facebook-icon"><a href="https://www.instagram.com/fatima.afta/?hl=es" target="_blank" rel="noopener noreferrer"
                            className="text-decoration-none text-white">Fatima.afta</a></i>
                    </div>

                    <div className="row align-items-center my-3 fs-5">
                        <div className="col-12 col-lg-5 my-3 ">
                            <h5 className='titulo-homePage'><i>Cake de Chocolate</i></h5>
                            <hr />
                            <p><i> Deliciosa cake de Chocolate decorada con fresas y brownie. Puedes agendar con 48hrs de
                                anticipacion.</i></p>
                            <Link
                                to={`/cake/62e809152f4afb94ef55535e#cakePage`}
                                className="btn btn-outline-light mb-5 mb-lg-0 position-absolute-em"><i
                                    className="bi bi-calendar-event"></i>
                                <i> Agendar</i>
                            </Link>

                        </div>
                        <Link
                            to={`/cake/62e809152f4afb94ef55535e#cakePage`}
                            className="col-12 col-lg-7 img-servicios d-flex justify-content-center my-2">
                            <img
                                src="/assets/cake-1.png"
                                alt="cake"
                                className="img-fluid" />
                        </Link>

                    </div>
                    <br />
                    <div className="row align-items-center my-3 fs-5">
                        <div className="col-12 col-lg-5 my-3">
                            <h5 className='titulo-homePage'><i>Cake de Chocolate</i></h5>
                            <hr />
                            <p><i> Deliciosa cake de Chocolate decorada con fresas y brownie. Puedes agendar con 48hrs de
                                anticipacion.</i></p>
                            <Link to={`/cake/62e8248c527110bfc3fbd280#cakePage`} className="btn btn-outline-light mb-5 mb-lg-0 position-absolute-em"><i
                                className="bi bi-calendar-event"></i><i> Agendar</i></Link>
                        </div>
                        <Link to={`/cake/62e8248c527110bfc3fbd280#cakePage`} className="col-12 col-lg-7 img-servicios d-flex justify-content-center my-5">
                            <img src="/assets/cake-10.png" alt="" className="img-fluid" />
                        </Link>
                    </div>

                    <div className="row align-items-center my-2 fs-5">
                        <div className="col-12 col-lg-5 my-5">
                            <h5 className='titulo-homePage'><i>Cake de Chocolate</i></h5>
                            <hr />
                            <p><i> Deliciosa cake de Chocolate decorada con fresas y brownie. Puedes agendar con 48hrs de
                                anticipacion.</i></p>
                            <Link to={`/cake/62e839f464ad0a604cdbcdc5#cakePage`} className="btn btn-outline-light mb-5 mb-lg-0 position-absolute-em"><i
                                className="bi bi-calendar-event"></i><i> Agendar</i></Link>
                        </div>
                        <Link to={`/cake/62e839f464ad0a604cdbcdc5#cakePage`} className="col-12 col-lg-7 img-servicios d-flex justify-content-center my-5">
                            <img src="/assets/cake-6.png" alt="" className="img-fluid" />
                        </Link>
                    </div>
                </div>

            </main>
        </>
    )

}