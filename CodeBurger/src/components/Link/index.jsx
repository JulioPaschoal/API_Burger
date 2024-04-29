// COMPONET BUTTON \\
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Linkbtn({children, ...props}){
    return(
        <>
        <Link {...props}>{children}</Link>
        </>
    )
}

// VALIDADO CHILDREN \\
Linkbtn.prototype = {
    children: PropTypes.string
}
