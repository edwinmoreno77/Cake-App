import { useEffect } from 'react';
import Swal from 'sweetalert2';
import { useAuthStore } from '../../hooks';
import { useForm } from '../../hooks';
import './LoginPage.css';

const loginFormFields = {
    loginEmail: '',
    loginPassword: '',
}

const registerFormFields = {
    registerName: '',
    registerEmail: '',
    registerPassword: '',
    registerPassword2: '',
}

export const LoginPage = () => {

    const { startLogin, errorMessage, startRegister } = useAuthStore();
    const { loginEmail, loginPassword, onInputChange: onLoginInputChange } = useForm(loginFormFields);
    const { registerEmail, registerName, registerPassword, registerPassword2, onInputChange: onRegisterInputChange } = useForm(registerFormFields);

    const loginSubmit = (event) => {
        event.preventDefault();
        startLogin({ email: loginEmail, password: loginPassword });
    }

    const registerSubmit = (event) => {
        event.preventDefault();
        if (registerPassword !== registerPassword2) {
            Swal.fire('Error en registro', 'Contraseñas no son iguales', 'error');
            return;
        }

        startRegister({ name: registerName, email: registerEmail, password: registerPassword });
    }

    useEffect(() => {
        if (errorMessage !== undefined) {
            Swal.fire('Error en la autenticación', errorMessage, 'error');
        }
    }, [errorMessage])

    return (
        <div id='Login' className="container login-container">
            <div className="row bg-productos-pages">
                <div className='logo-login animate__animated animate__heartBeat'>
                    <img src="/assets/logo-letra.png" alt="logo" />
                </div>
                <div className="col-md-6 login-form-1 bg-position-pages">
                    <h3>Ingreso</h3>
                    <form onSubmit={loginSubmit}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Correo"
                                name="loginEmail"
                                value={loginEmail}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="loginPassword"
                                value={loginPassword}
                                onChange={onLoginInputChange}
                            />
                        </div>
                        <div className="d-grid gap-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Login"
                            />
                        </div>
                    </form>
                </div>

                <div className="col-md-6 login-form-2  bg-position-pages">
                    <h3>Registro</h3>
                    <form onSubmit={registerSubmit}>
                        <div className="form-group mb-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre"
                                name="registerName"
                                value={registerName}
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Correo"
                                name="registerEmail"
                                value={registerEmail}
                                onChange={onRegisterInputChange}
                            />
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="registerPassword"
                                value={registerPassword}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Repita la contraseña"
                                name="registerPassword2"
                                value={registerPassword2}
                                onChange={onRegisterInputChange}
                            />
                        </div>

                        <div className="d-grid gap-2">
                            <input
                                type="submit"
                                className="btnSubmit"
                                value="Crear cuenta" />
                        </div>
                    </form>
                </div>

                <footer id="Contactos" className=" d-flex justify-content-center bg-position-pages">
                    <div className="container">
                        <div className="container my-5 display-6 fs-2 text-center">
                            <h4 className="my-2"><i>Bienvenido! inicia sesión con tu cuenta o puedes registrarte y tener acceso de forma rápida y sencilla a tus Cakes favoritas.</i></h4>
                        </div>
                        <div className="text-center d-flex justify-content-center img-footer icon">
                            <a href="https://www.instagram.com/fatima.afta/?hl=es"><img src="/assets/logo.png"
                                alt="" /></a>
                        </div>
                        <div className="text-center py-2">
                            <i className="bi bi-twitter mx-1 twitter-icon text-primary"><a
                                href="https://www.instagram.com/fatima.afta/?hl=es" target="_blank" rel="noopener noreferrer"
                                className="text-decoration-none text-dark">Fatima.afta</a></i>
                            <i className="bi bi-instagram mx-1  instagram-icon"><a href="https://www.instagram.com/fatima.afta/?hl=es" target="_blank" rel="noopener noreferrer"
                                className="text-decoration-none text-dark">Fatima.afta</a></i>
                            <i className="bi bi-facebook mx-1  facebook-icon text-primary"><a
                                href="https://www.instagram.com/fatima.afta/?hl=es" target="_blank" rel="noopener noreferrer"
                                className="text-decoration-none text-dark">Fatima.afta</a></i>
                        </div>
                        <div className="text-center my-2">
                            <i className="bi bi-whatsapp text-success"><a href=""
                                className="text-decoration-none text-dark">+56-9354159999</a></i>

                            <p> <a
                                href="https://www.google.com/maps/place/Homero+%C3%81vila+955,+Antofagasta/@-23.672912,-70.4057214,17z/data=!3m1!4b1!4m5!3m4!1s0x96afd5a11082bb11:0xd22d1a0e8d51e0a1!8m2!3d-23.672912!4d-70.4035327" target="_blank" rel="noopener noreferrer"
                                className="text-decoration-none text-danger"><i className="bi bi-geo-fill"></i></a>Antofagasta-Homero Avila 955</p>
                            <p className="m-2 lead"><i>Derechos Reservados, &copy;Fatima.Afta.</i></p>
                        </div>
                    </div >
                </footer >

            </div>
        </div >
    )
}