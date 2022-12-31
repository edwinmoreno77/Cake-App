import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useAuthStore, useFormSearch } from '../../hooks';
import { deleteImgProduct, updateImgProduct, updateProductsThunks } from '../../store/cakes/thunks';
import Swal from 'sweetalert2';


const uploadProduct = {
    name: '',
    description: '',
    price: '',
}

export const ResourceManager = ({ uid, category }) => {

    const { user } = useAuthStore();

    const { errorMessage } = useSelector(state => state.cake);

    const dispatch = useDispatch();

    const fileInputRef = useRef();

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;
        updateImgProduct(target.files, uid);
    }

    const onDeleteFile = () => {
        deleteImgProduct(uid);
    }

    const { name, description, price, onInputChange } = useFormSearch(uploadProduct);

    const uploadProductSubmit = (event) => {
        event.preventDefault();
        dispatch(updateProductsThunks(uid, name, price, description, category));
    }

    useEffect(() => {

        if (errorMessage != undefined) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: errorMessage,
                footer: 'Algo salio mal'
            })
        }
    }, [errorMessage])


    return (
        < div className='text-center'>
            {
                (user.role === 'ADMIN_ROLE') ?
                    <div>

                        < div >
                            <hr />
                            <h1>Recursos del Administrador</h1>
                            <input
                                className='d-none'
                                type="file"
                                ref={fileInputRef}
                                onChange={onFileInputChange}
                            />

                            <button className="p-1 ms-1 mt-5 btn btn-warning shadow"
                                onClick={() => fileInputRef.current.click()}>
                                actualizar img
                                <i className="fa-sharp fa-solid fa-upload"></i>
                            </button>
                        </div>


                        <button className="p-1 ms-1 mt-5 btn btn-danger shadow"
                            onClick={onDeleteFile}>
                            Borrar Producto
                        </button>


                        <div>
                            <hr />
                            <h3 className='text-center'>Actualizar Producto</h3>
                            <div className='text-center p-5'>
                                <form onSubmit={uploadProductSubmit} className='row d-flex justify-content-center'>

                                    <div className='col-12 col-md-8 col-lg-4'>
                                        <label>Name</label>
                                        <input
                                            className='m-2 m-2 shadow form-control'
                                            type="text"
                                            placeholder='name'
                                            name='name'
                                            value={name}
                                            onChange={onInputChange}
                                        />
                                    </div>

                                    <div className='col-12 col-md-8 col-lg-2'>
                                        <label>price</label>
                                        <input
                                            className='m-2 m-2 shadow form-control'
                                            type="number"
                                            placeholder='price'
                                            name='price'
                                            value={price}
                                            onChange={onInputChange}
                                        />
                                    </div>
                                    <div className='col-12 col-md-8 col-lg-12'>
                                        <label>description</label>
                                        <input
                                            className='m-2 m-2 shadow form-control'
                                            type="text"
                                            placeholder='description'
                                            name='description'
                                            value={description}
                                            onChange={onInputChange}
                                        />
                                    </div>

                                    <div className='text-center'>
                                        <button
                                            className='btn btn-warning p-2 m-2'
                                            type='submit'>
                                            <i className="fa-sharp fa-solid fa-upload"></i> Actualizar Producto
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <hr />
                        </div>
                    </div> : null
            }

        </div >
    )
}
