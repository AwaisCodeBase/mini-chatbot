import { useRef, useEffect } from 'react'
import  ChatMessage  from './ChatMessage'
import './ChatMessages.css'

function ChatMessages({ chatMessages }) {
    const chatMessagesRef = useRef(null)
    useEffect(() => {
        const containerElem = chatMessagesRef.current
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight
        }
    }, [chatMessages])
    return (
        <div className='chat-messages-container' ref={chatMessagesRef}>
            {chatMessages.map((chatMessages) => {
                return (
                    <ChatMessage
                        message={chatMessages.message}
                        sender={chatMessages.sender}
                        timestamp={chatMessages.timestamp}
                        key={chatMessages.id}
                    />
                )
            })}
        </div>
    )

}

export default ChatMessages
