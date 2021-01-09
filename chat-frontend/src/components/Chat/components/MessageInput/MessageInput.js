import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MessageInput.scss'

const MessageInput = ({ chat }) => {

  const user = useSelector(state => state.authReducer.user)

  const [message, setMessage] = useState('')
  const [image, setImage] = useState('')

  const handleMessage = (e) => {
    const value = e.target.value
    setMessage(value)

    // notify other users that this user is typing something
  }

  const handleKeyDown = (e, imageUpload) => {
    if (e.key === 'Enter')
      sendMessage(imageUpload)
  }

  const sendMessage = (imageUpload) => {
    if (message.length < 1 && !imageUpload) return

    const msg = {
      type: imageUpload ? 'image' : 'text',
      fromUserId: user.id,
      toUserId: chat.Users.map(user => user.id),
      chatId: chat.id,
      message: imageUpload ? image : message
    }

    sendMessage('')
    setImage('')
    // send message with socket
  }


  return (
    <div id='input-container'>
      <div id='message-input'>
        <input
          type='text'
          placeholder='Message...'
          onChange={e => handleMessage(e)}
          onKeyDown={e => handleKeyDown(e, false)}
        />
        <FontAwesomeIcon
          icon={['far', 'smile']}
          className='fa-icon'
        />
      </div>
    </div>
  )
}

export default MessageInput