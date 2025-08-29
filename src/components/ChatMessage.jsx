import React from "react"
import RobotProfileImage from '../assets/robot.png'
import UserProfileImage from '../assets/COO-1.png'
import './ChatMessage.css'

function ChatMessage({ message, sender, timestamp }) {
    return (
        <div className={sender === 'user' ? 'chat-message-user' : 'chat-message-robot'}>
            {sender === 'robot' && (
                <img src={RobotProfileImage} className='chat-message-profile' />
            )}

            <div className="chat-message-content">
                <div className="chat-message-text">
                    {message}
                </div>
                <div className="chat-message-timestamp">
                    {timestamp}
                </div>
            </div>

            {sender === 'user' && (
                <img src={UserProfileImage} className='chat-message-profile' />
            )}
        </div>
    )
}

export default ChatMessage
