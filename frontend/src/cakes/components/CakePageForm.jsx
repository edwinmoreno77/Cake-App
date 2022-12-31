import React from 'react'
import { useFormSearch } from '../../hooks';


const FormFields = {
    biscocho: '',
    relleno: '',
    tamaño: '',
    extra: '',
    topper: '',
    fecha: '',
}

export const CakePageForm = ({ uid }) => {

    const onSubmitFromCake = (e) => {
        e.preventDefault();
        console.log({ uid, biscocho, tamaño, relleno, extra, fecha, topper });
    }

    const { biscocho, tamaño, extra, relleno, fecha, topper, onInputChange } = useFormSearch(FormFields);

    return (
        <div className="py-1">
            <form
                onSubmit={onSubmitFromCake}
                className="row needs-validation"
                noValidate
            >
                <div className="col-12 col-md-12 col-lg-9 d-flex justify-content-between">
                    <div className="p-1">
                        <label className=" item-cakePage">Biscocho:</label>
                    </div>
                    <div className="p-1">
                        <select
                            className="form-select"
                            required
                            name="biscocho"
                            value={biscocho}
                            onChange={onInputChange}
                        >
                            <option >Seleccionar...</option>
                            <option >Chocolate</option>
                            <option >Vainilla</option>
                            <option >Marmoleada</option>
                            <option className="invalid-feedback">
                                indique el biscocho
                            </option>
                        </select>
                    </div>
                </div>

                <div className="col-12 col-md-12 col-lg-9 d-flex justify-content-between">
                    <div className="p-1">
                        <label className=" item-cakePage">Relleno:</label>
                    </div>
                    <div className="p-1">
                        <select
                            className="form-select"
                            name="relleno"
                            value={relleno}
                            onChange={onInputChange}
                        >
                            <option >Seleccionar...</option>
                            <option >Ganache de Chocolate</option>
                            <option >Ganache de Chocolate Blanco</option>
                            <option >Manjar</option>
                            <option >Buttercream</option>
                            <option className="invalid-feedback">
                                indique el relleno
                            </option>
                        </select>
                    </div>
                </div>

                <div className="col-12 col-md-12 col-lg-9 d-flex justify-content-between">
                    <div className="p-1">
                        <label className="item-cakePage">Tamaño:</label>
                    </div>
                    <div className="p-1">
                        <select
                            className="form-select "
                            name="tamaño"
                            value={tamaño}
                            onChange={onInputChange}
                        >
                            <option >Seleccionar...</option>
                            <option >22cm de diametro (24 Personas)</option>
                            <option >20cm de diametro (22 Personas)</option>
                            <option >18cm de diametro (18 Personas)</option>
                            <option >16cm de diametro (12 Personas)</option>
                            <option >14cm de diametro (10 Personas)</option>
                            <option >10cm de diametro (06 Personas)</option>
                            <option className="invalid-feedback">
                                indique el tamaño
                            </option>
                        </select>
                    </div>
                </div>

                <div className="col-12 col-md-12 col-lg-9 d-flex justify-content-between">
                    <div className="p-1">
                        <label className="item-cakePage">Extra:</label>
                    </div>
                    <div className="p-1">
                        <select
                            className="form-select"
                            name="extra"
                            value={extra}
                            onChange={onInputChange}
                        >
                            <option >Seleccionar...</option>
                            <option >Sin extra</option>
                            <option >Almendra</option>
                            <option >Nueces</option>
                            <option >Mani</option>
                            <option >Piña</option>
                            <option >Mix frutos secos</option>
                            <option >Frutos del bosque</option>
                            <option >Fruitilla en trozos</option>
                            <option >Mango en trozos</option>
                            <option >Durazno en trozos</option>
                            <option >Platano en trozos</option>

                            <option className="invalid-feedback">
                                indique extras
                            </option>
                        </select>
                    </div>
                </div>

                <div className="col-12 col-md-12 col-lg-9 d-flex justify-content-between">
                    <div className="p-1">
                        <label className="item-cakePage">Topper:</label>
                    </div>
                    <div className="p-1">
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Feliz Cumpleaños Fatima'
                            name="topper"
                            value={topper}
                            onChange={onInputChange}
                        />
                    </div>
                </div>


                <div className="col-12 col-md-11 col-lg-9 d-flex justify-content-between">
                    <div className="p-1">
                        <label className="item-cakePage">Fecha:</label>
                    </div>
                    <div className="p-1">
                        <input
                            type="date"
                            className="form-control"
                            name="fecha"
                            value={fecha}
                            onChange={onInputChange}
                        />
                    </div>
                </div>
                <div className="col-12 mt-5 text-center">
                    <button
                        type="submit"
                        className="btn btn-warning col-4 m-2 shadow"
                    >
                        <i className="bi bi-calendar-event"></i><i> Agendar</i>
                    </button>
                </div>
            </form>
        </div>
    )
}
