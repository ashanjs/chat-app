import React, { useState, Fragment } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { logout } from '../../../../store/actions/auth'
import Modal from '../../../Modal/Modal'

const Navbar = () => {

  const dispatch = useDispatch()

  const user = useSelector(state => state.authReducer.user)
  const [showProfileOptions, setShowProfileOptions] = useState(false)
  const [showProfileModal, setShowProfileModal] = useState(false)

  return (
    <div id="navbar" className='card-shadow'>
      <h2>Chat.io</h2>
      <div id="profile-menu" onClick={() => setShowProfileOptions(!showProfileOptions)}>
        <img width="40" height="40" src={user.avatar} alt='Avatar' />
        <p>{user.firstName} {user.lastName}</p>
        <FontAwesomeIcon icon='caret-down' className='fa-icon' />

        {
          showProfileOptions &&
          <div id='profile-options'>
            <p onClick={() => setShowProfileModal(true)}>Update profile</p>
            <p onClick={() => dispatch(logout())}>Logout</p>
          </div>
        }

        {
          showProfileModal &&
          <Modal click={() => setShowProfileModal(false)}>
            <Fragment key='header'>
              Modal Header
            </Fragment>
            <Fragment key='body'>
              Modal Body
            </Fragment>
            <Fragment key='footer'>
              Modal Footer
            </Fragment>
          </Modal>
        }

      </div>
    </div>
  )
}


export default Navbar