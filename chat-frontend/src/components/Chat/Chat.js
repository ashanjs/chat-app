import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './components/Navbar/Navbar'

import './chat.scss'

const Chat = () => {
  const user = useSelector(state => state.authReducer.user)

  return (
    <div id="chat-container">
      <Navbar />
      <div id="chat-wrap">
        Data
      </div>
    </div>
  );
}

export default Chat