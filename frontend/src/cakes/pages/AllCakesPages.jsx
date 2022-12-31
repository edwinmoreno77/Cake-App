import { Slider, SubNavBar } from '../../ui';
import { CakeList } from '../components/CakeList';

export const AllCakesPages = () => {
    return (
        <>
            {/* <Slider /> */}

            <SubNavBar />
            <div>
                <div className="m-3 bg-position-pages">
                    <h1 className='text-center py-4 tituloPage'><i>Productos</i></h1>
                    <CakeList available={true} />
                </div>

            </div>
        </>
    )
}
