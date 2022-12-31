import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


export const CakeCard = ({ uid, category, price, name, description, img }) => {

    return (
        <div className='imgCard animate__animated animate__fadeIn'>
            <div className='card shadow mb-2'>
                <div className='row no-gutters'>
                    <Link
                        className='col-12 text-decoration-none'
                        to={`/cake/${uid}#cakePage`}>
                        <img src={img} className='card-img shadow' alt={name} />
                    </Link>
                    <div className='col-12 col-hero'>
                        <div className='card-body'>
                            <h6 className='card-title'>{name}</h6>
                            <p className='card-text'>{price}</p>
                            <Link
                                className='text-decoration-none btn btn-warning shadow'
                                to={`/cake/${uid}#cakePage`}>
                                Ver Producto
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
