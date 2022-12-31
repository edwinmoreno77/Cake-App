import { useRef } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { useAuthStore } from "../../hooks/useAuthStore";

export const Navbar = () => {
  const { startLogout, user, status, updateImgUser } = useAuthStore();

  const fileInputRef = useRef();

  const onFileInputChange = ({ target }) => {
    if (target.files === 0) return;
    updateImgUser(target.files, user.uid);
  };

  return (
    <div id="Home">
      <nav
        id="navbar-id"
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      >
        <div className="container">
          <a
            href="https://www.instagram.com/fatima.afta/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-brand"
          >
            <img src="/assets/logo.png" alt="" />
          </a>
          <div className="navbar-user d-flex justify-content-center align-items-center">
            <h5 className="text-white-50 ms-lg-1 user-name">{user.name}</h5>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 ms-auto mb-lg-0 d-flex align-items-center">
              <li className="nav-item">
                <Link className="nav-link" to={`/homePage#Home`}>
                  <i>Inicio</i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`#Contactos`}>
                  <i>Nosotros</i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`/allcakes#subNavBar`}>
                  <i>Productos</i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={`#Contactos`}>
                  <i>Contactos</i>
                </Link>
              </li>
              {status === "authenticated" ? (
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    onClick={startLogout}
                    to={`/login#Login`}
                  >
                    <i>Cerrar Sesion</i>
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to={`/login#Login`}>
                    <i>&nbsp;Iniciar Sesion</i>
                  </Link>
                </li>
              )}

              <li className="nav-item navbar-user ms-lg-3">
                <input
                  className="d-none"
                  type="file"
                  ref={fileInputRef}
                  onChange={onFileInputChange}
                />
                <img
                  type="button"
                  className="p-1 rounded-circle"
                  src={user.img ? user.img : "assets/no-image.jpg"}
                  onClick={() => fileInputRef.current.click()}
                  alt="userImg"
                ></img>
              </li>
              <li className="nav-item ms-lg-4">
                <Link className="nav-link" to={`/allcakes#subNavBar`}>
                  <i className="fa-sharp fa-solid fa-cart-shopping navbar-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
