import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './MessageInput.scss'

const MessageInput = ({ chat }) => {

  const user = useSelector(state => state.authReducer.user)
  const socket = useSelector(state => state.chatReducer.socket)

  const [message, setMessage] = useState('')
  const [image, setImage] = useState('')

  const handleMessage = (e) => {
    const value = e.target.value
    setMessage(value)

    // notify other users that this user is typing something
  }

  const handleKeyDown = (e, imageUpload) => {
    if (e.key === 'Enter') sendMessage(imageUpload)
  }

  const sendMessage = (imageUpload) => {
    if (message.length < 1 && !imageUpload) return

    const msg = {
      type: imageUpload ? 'image' : 'text',
      fromUser: user,
      toUserId: chat.Users.map(user => user.id),
      chatId: chat.id,
      message: imageUpload ? imageUpload : message
    }

    setMessage('')
    setImage('')

    // send message with socket
    socket.emit('message', msg)
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