import React from 'react'
import { NavLink } from 'react-router-dom'

const ChoiceUser = () => {
  return (
    <div>
        <NavLink to="/dashboard/12">user12</NavLink>
        <NavLink to="/dashboard/18">user18</NavLink>
    </div>
  )
}

export default ChoiceUser