import PropTypes from 'prop-types';
import { IoMdCheckmarkCircle } from "react-icons/io";
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex  gap-2'> <IoMdCheckmarkCircle className=' mt-1 text-green-500 ' />{feature}</p>
        </div>
    );
};

Feature.propTypes ={
    feature:PropTypes.string
}
export default Feature;