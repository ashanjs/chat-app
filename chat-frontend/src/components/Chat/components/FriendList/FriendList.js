import React, { useState, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Friend from '../Friend/Friend'
import { setCurrentChat } from '../../../../store/actions/chat'
import Modal from '../../../Modal/Modal'
import './FriendList.scss'

const FriendList = () => {

  const dispatch = useDispatch()
  const chats = useSelector(state => state.chatReducer.chats)

  const [showFriendModal, setShowFriendModal] = useState(false)
  const [suggestions, setSuggestions] = useState([])

  const openChat = (chat) => {
    dispatch(setCurrentChat(chat))
  }

  const searchFriends = (e) => {
    // chat service
  }

  const addNewFriend = (id) => {
    // dispatch
  }

  return (
    <div id='friends' className='shadow-light'>
      <div id='title'>
        <h3 className='m-0'>Friends</h3>
        <button>ADD</button>
      </div>

      <hr />

      <div id='friends-box'>
        {
          chats.length > 0
            ? chats.map(chat => {
              return <Friend click={() => openChat(chat)} chat={chat} key={chat.id} />
            })
            : <p id='no-chat'>No friends added</p>
        }
      </div>
      {
        showFriendModal &&
        <Modal>
          <Fragment key='header'>
            <h3 className='m-0'>create new chat</h3>
          </Fragment>
          <Fragment key='body'>
            <p>Find friends by typing their name below</p>
            <input
              onInput={e => searchFriends(e)}
              type='text'
              placeholder='Search...'
            />
            <div id='suggestions'>
              {
                suggestions.map(user => {
                  return <div>
                    <p className='m-0'>{user.firstName} {user.lastName}</p>
                    <button onClick={() => addNewFriend(user.id)}>ADD</button>
                  </div>
                })
              }
            </div>
          </Fragment>
        </Modal>
      }
    </div>
  )
}

export default FriendList