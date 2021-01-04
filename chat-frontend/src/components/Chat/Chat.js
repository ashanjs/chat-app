import React from 'react'
import { useSelector } from 'react-redux'

const Chat = () => {
  const user = useSelector(state => state.authReducer.user)

  return (
    <div>
      <h1>Chat Screen</h1>
      <p>Welcome, {user.firstName}</p>
    </div>
  );
}

export default Chat