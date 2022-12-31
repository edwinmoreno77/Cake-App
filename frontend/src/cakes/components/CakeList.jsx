import { useMemo } from 'react'
import { useCake } from '../../hooks/useCake';
import { getProductByState } from '../helpers/getProductState';
import { CakeCard } from './CakeCard';

export const CakeList = (available) => {

    const { cakes: torta } = useCake();

    const cakes = useMemo(() => getProductByState(available, torta), [available, torta]);

    return (
        <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4 bg-productos-pages'>
            {cakes.map(cake => {
                return (
                    <CakeCard
                        key={cake.uid}
                        {...cake} />
                )
            })}
        </div>
    )
}
