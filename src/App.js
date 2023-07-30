import React from 'react'
import { useState } from 'react';
import './App.css';
import { createChat } from './chat';

function App() {
  const [display, setDisplay] = useState(true)
  const [chats, setChats] = useState([])
  const [prompt, setPrompt] = useState('')
  function ondisplay() {
    setDisplay(!display)
  }
  function promptHandle(e) {
    setPrompt(e.target.value)
  }
  async function sendMessages(e) {
    if (prompt.length >= 1) {
      let obj = {
        "role": "user",
        "content": prompt
      }
      let array = [...chats]
      array.push(obj)
      setChats(array)
      setPrompt('')
      const response = await createChat(prompt)
      let obj2 = {
        "role": "assistant",
        "content": response
      }
      console.log(obj2)
      array.push(obj2)
      setChats(array)
    }
  }

  function Keydownhandle(e) {
    if (e.key === "Enter") {
      sendMessages(e)
    }
  }

  return (
    <div className='app'>
      <div className='title-page'>
        <h1>This Chatbot with gpt</h1>
      </div>
      <div className='chat'>
        <div className='chat-center'>
          <div className={display === true ? 'nodisplay' : 'chat-window'}>
            <div className='chat-icons'>
              <button onClick={(e) => { ondisplay(e) }}>
                X
              </button>
            </div>
            <div className='chat-messages'>
              {
                chats.length >= 1 && (
                  chats.map((c) => {
                    return (
                      c.role === "assistant" ? (
                        <div className='chat-asistent'>
                          <span>{c.content}</span>
                        </div>
                      ) :
                        <div className='chat-user'>
                          <span>{c.content}</span>
                        </div>
                    )
                  })
                )
              }

            </div>
            <div className='chat-inputs'>
              <input type='text' value={prompt} onChange={(e) => { promptHandle(e) }} onKeyDown={(e) => { Keydownhandle(e) }}></input>
              <button onClick={(e) => { sendMessages(e) }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='button-chat'>
          <button onClick={(e) => { ondisplay(e) }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-chat-dots" viewBox="0 0 16 16">
              <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z" />
            </svg>
          </button>
        </div>

      </div>
    </div>

  );
}

export default App;
