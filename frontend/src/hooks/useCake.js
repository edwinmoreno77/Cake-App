import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/cakes/thunks';


export const useCake = () => {

    const dispatch = useDispatch();

    const { cakes } = useSelector(state => state.cake);

    useEffect(() => {

        dispatch(getProducts(100));

    }, [])

    return {
        cakes
    }
}