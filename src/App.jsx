import { useState, useEffect } from 'react'
import './App.css'
import ChatInput from './components/ChatInput'
import ChatMessages from './components/ChatMessages'





function App() {
  const [chatMessages, setChatMessages] = useState(() => {
    return JSON.parse(localStorage.getItem('messages')) || [
      {
        message: 'hello chatbot',
        sender: 'user',
        id: 'id1',
        timestamp: '7:45'
      },
      {
        message: 'Hello! How can I help you?',
        sender: 'robot',
        id: 'id2',
        timestamp: '7:45'
      },
      {
        message: 'Can you get me todays date?',
        sender: 'user',
        id: 'id3',
        timestamp: '7:45'
      },
      {
        message: 'Today is September 27',
        sender: 'robot',
        id: 'id4',
        timestamp: '7:45'
      }
    ]
  })


  // 2. Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages))
  }, [chatMessages])

  // 3. Clear button handler
  function clearMessages() {
    setChatMessages([])
    localStorage.setItem('messages', JSON.stringify([]))
  }
  //const chatMessages = array[0]
  //ChatInput setChatMessages = array[1]

  return (
    <div className='app-container'>
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <button onClick={clearMessages} className='clear-button'>
        Clear
      </button>
    </div>
  )
}

export default App
