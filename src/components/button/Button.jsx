import React from 'react'
import PropTypes from 'prop-types'
import './button.scss'

const Button = props => {
  return (
    <button className={`btn ${props.className}`}
      onClick = {props.onclick ? () => props.onclick() : null} >
        {props.children}
    </button>
  )
}

Button.propTypes = {
    onclick : PropTypes.func
}

export default Button