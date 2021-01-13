import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Message from '../Message/Message'
import './MessageBox.scss'

const MessageBox = ({ chat }) => {

  const user = useSelector(state => state.authReducer.user)
  const scrollBottom = useSelector(state => state.chatReducer.scrollBottom)
  const senderTyping = useSelector(state => state.chatReducer.senderTyping)
  const msgBox = useRef()

  useEffect(() => {
    setTimeout(() => {
      scrollManual(msgBox.current.scrollHeight)
    }, 100)
  }, [scrollBottom])

  const scrollManual = (value) => {
    msgBox.current.scrollTop = value
  }

  return (
    <div id='msg-box' ref={msgBox}>
      {
        chat.Messages.map((message, index) => {
          return <Message
            user={user}
            chat={chat}
            message={message}
            index={index}
            key={message.id}
          />
        })
      }
      {
        senderTyping.typing && senderTyping.chatId === chat.id
          ? <div className='message'>
            <div className='other-person'>
              <p className='m-0'>{senderTyping.fromUser.firstName} {senderTyping.fromUser.lastName}...</p>
            </div>
          </div>
          : null
      }
    </div>
  )
}
export default MessageBox