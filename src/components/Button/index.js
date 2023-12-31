import React from "react"
import './index.css'

export const Button = (props) => {
  return (
    <button {...props} className={'button ' + props.className} />
  )
}
