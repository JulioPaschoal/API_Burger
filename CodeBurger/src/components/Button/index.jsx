// COMPONET BUTTON \\
import { ContainerButton } from './styles';
import PropTypes from 'prop-types';

export default function Button({children, ...props}){
    return(
        <>
        <ContainerButton {...props}>{children}</ContainerButton>
        </>
    )
}

// VALIDADO CHILDREN \\
Button.prototype = {
    children: PropTypes.string
}
