import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm p-2'>
        <img
    className="h-8"
    alt="user-logo"
    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
  ></img>
  <span className='font-bold px-3'>{name}</span>
  <span>{message}</span>
  
  </div>
  )
}

export default ChatMessage