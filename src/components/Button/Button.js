import React from 'react'
import './Button.scss'

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']
const COLOR = ['primary', 'blue', 'green']

const Button = ({ children, type, onClick, buttonStyle, buttonSize, buttonColor }) => {
  const checkoutButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
  const checkoutButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]
  const checkoutButtonColor = COLOR.includes(buttonColor) ? buttonColor : null

  return (
    <button
      className={`btn ${checkoutButtonStyle} ${checkoutButtonSize} ${checkoutButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

export default Button
