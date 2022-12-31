import { useMemo } from 'react'
import { useCake } from '../../hooks/useCake';
import { getCakeByCategory } from '../helpers/getCakeByCategory';
import { CakeCard } from './CakeCard';

export const CakeListByCategory = ({ category }) => {

    const { cakes: torta } = useCake();

    const cakes = useMemo(() => getCakeByCategory(category, torta), [category, torta]);

    return (
        <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-4 g-4'>
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
