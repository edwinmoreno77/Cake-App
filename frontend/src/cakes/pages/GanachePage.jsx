import React from 'react';
import { useAuthStore } from '../../hooks';
import { SubNavBar } from '../../ui';
import { AddCakes } from '../components/AddCakes';
import { CakeListByCategory } from '../components/CakeListByCategory';

export const GanachePage = () => {

    const { user } = useAuthStore();

    const category = '62e583d66e721b7718c8c449';//CHOCOLATE


    return (
        <>
            <SubNavBar />
            <div className='bg-position-pages'>
                <div className="m-3 bg-productos-pages">
                    <h1 className='text-center py-4 tituloPage'><i>Ganache</i></h1>
                    <CakeListByCategory category={'CHOCOLATE'} />
                </div>
            </div>
            {
                (user.role === 'ADMIN_ROLE') ?
                    <AddCakes category={category} /> : null

            }
        </>

    )
}



