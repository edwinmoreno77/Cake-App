import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import { CakeCard } from "../components/CakeCard";
import { getCakeByName } from "../helpers/getCakeByName";
import { SubNavBar } from "../../ui";
import { useCake } from '../../hooks/useCake';
import { useFormSearch } from "../../hooks";



export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { cakes: torta } = useCake();

    const { q = '' } = queryString.parse(location.search);

    const cakes = getCakeByName(q, torta);

    const showSearch = (q.length === 0);
    const showError = (q.length > 0) && cakes.length === 0;


    const { searchText, onInputChange } = useFormSearch({
        searchText: q
    });

    const onSearchSubmit = (e) => {
        e.preventDefault();
        // if (searchText.trim().length <= 1) return;
        navigate(`?q=${searchText}`);
    }


    return (
        <>
            <SubNavBar />
            <div className="row container-fluid bg-productos-pages bg-position-pages">
                <div className="col-9 col-md-5 m-5">
                    <h4 className="tituloPage">Buscador</h4>
                    <form onSubmit={onSearchSubmit}>
                        <input
                            className="form-control shadow mt-5 bg-position-pages"
                            placeholder="Buscar una Cake"
                            type="text"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-warning mt-5 shadow bg-position-pages ">
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-3 m-2 p-5">
                        <div className=" mt-5 alert alert-primary animate__animated animate__fadeIn"
                            style={{ display: showSearch ? '' : 'none' }}>
                            Buscar una cake
                        </div>
                        <div className="mb-5 alert alert-danger animate__animated animate__fadeIn"
                            style={{ display: showError ? '' : 'none' }}>
                            no hay cakes con <b>{q}</b>
                        </div>
                        {
                            cakes.map(cake => (
                                <CakeCard key={cake.uid} {...cake} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
