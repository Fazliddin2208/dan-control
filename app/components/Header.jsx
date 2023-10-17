import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Header({ title }) {
  return (
    <div className='header'>
      <FontAwesomeIcon icon={faBars} />
      <h3>{title}</h3>
    </div>
  )
}
