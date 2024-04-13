/* eslint-disable no-unused-vars */
import { ContainerButton } from "./style";
import PropTypes from 'prop-types'

export default function Button({children, ...rest}){
  console.log(children)
    return(
        <>
            <ContainerButton {...rest}>{children}</ContainerButton>
        </>
    )
}

// VALIDANDO PROP-TYPES
Button.propTypes = {
  children: PropTypes.string
}
