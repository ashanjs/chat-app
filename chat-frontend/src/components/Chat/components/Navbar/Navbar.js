import React from 'react'
import { useSelector } from 'react-redux'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = () => {

  const user = useSelector(state => state.authReducer.user)

  return (
    <div id="navbar" className='card-shadow'>
      <h2>Chat.io</h2>
      <div id="profile-menu">
        <img width="40" height="40" src={user.avatar} alt='Avatar' />
        <p>{user.firstName} {user.lastName}</p>
        <FontAwesomeIcon icon='caret-down' className='fa-icon' />
      </div>
    </div>
  )
}


export default Navbar