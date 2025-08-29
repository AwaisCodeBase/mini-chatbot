import React from "react"
import './ChatInput.css'
import { useState } from "react"
import { Chatbot } from 'supersimpledev'
import dayjs from 'dayjs'

function ChatInput({ chatMessages, setChatMessages }) {

    const [inputText, setInputText] = useState('')

    function saveInputText() {
        setInputText(event.target.value)
    }
    function sendMessage() {
        const newChatMessages = [...chatMessages,
        {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID(),
            timestamp: dayjs().format('HH:mm')
        }
        ]
        setChatMessages(newChatMessages)
        const response = Chatbot.getResponse(inputText)
        setChatMessages([...newChatMessages,
        {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID(),
            timestamp: dayjs().format('HH:mm')
        }
        ])
        setInputText('')
    }
    return (
        <div className='chat-input-container'>
            <input placeholder="Send a message to Chatbot" size="30"
                onChange={saveInputText}
                value={inputText}
                className='chat-input'
            />
            <button onClick={sendMessage} className='send-button'>Send</button>
        </div>
    )
}

export default ChatInput
