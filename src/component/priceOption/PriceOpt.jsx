import PropTypes from 'prop-types';
import Feature from '../feature/Feature';

const PriceOpt = ({ option }) => {
    const { name, features, price } = option;
    return (
        <div className='bg-blue-500 text-white flex flex-col  rounded-lg p-5'>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold'>{price}</span>
                <span className='text-2xl'>/mon</span>
            </h2>
            <h3 className='text-4xl text-center flex-grow'>{name}</h3>
            {
                features.map(feature => <Feature feature={feature} key={feature.id}></Feature>)
            }
            <button className='mt-12 w-full py-4 bg-green-600 rounded-lg font-bold hover:bg-green-900'>Buy Now</button>
        </div>
    );
};
PriceOpt.propTypes = {
    option: PropTypes.object
}

export default PriceOpt;