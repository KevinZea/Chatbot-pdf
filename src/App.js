import React from 'react'
import { useState } from 'react';
import './App.css';
import { createChat } from './chat';
import LinkRenderer from './LinkRenderer/LinkRenderer';

function App() {
  const [chats, setChats] = useState([])
  const [prompt, setPrompt] = useState('')

  function promptHandle(e) {
    setPrompt(e.target.value)
  }
  async function sendMessages(e) {
    if (prompt.length >= 1) {
      let obj = {
        "role": "user",
        "content": prompt
      }
      setPrompt('')
      stateChats(obj)
      const response = await createChat(prompt)
      stateChats(response)
      // console.log(chats)
    }
  }
  function stateChats(obj) {
    chats.push(obj)
    setChats([...chats])
  }

  function Keydownhandle(e) {
    if (e.key === "Enter") {
      sendMessages(e)
    }
  }


  return (
    <div className='app'>
      <nav className='navbar'>
        <h1>Citybot</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16">
          <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
          <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
        </svg>
      </nav>
      <div className='chat'>
        <div className='chat-baner'>
          <div className='chat-baner-icon'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16">
              <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
              <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
            </svg>
          </div>
          <div className='chat-baner-info'>
            <span>
              ¡Bienvenido a Citybot!
            </span>
            <p>
              Descubre lo mejor de cada ciudad con Citybot: tu asistente virtual de recomendaciones turísticas
              <br></br>
              <br></br>
              Puedes iniciar una conversación o probar los siguientes ejemplos:
            </p>
            <div className='chat-baner-info-buttons'>
              <button>¿Qué es la feria sabor a mi?</button>
              <button>¿Cómo llegar a Salento?</button>
              <button>¿Qué puedo hacer en Santa Rosa?</button>
            </div>

          </div>
        </div>
        <div className='chat-messages'>
          {
            chats.length >= 1 && (
              chats.map((c) => {
                return (
                  c.role === "assistant" ? (
                    <div className='chat-asistent'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-compass" viewBox="0 0 16 16">
                        <path d="M8 16.016a7.5 7.5 0 0 0 1.962-14.74A1 1 0 0 0 9 0H7a1 1 0 0 0-.962 1.276A7.5 7.5 0 0 0 8 16.016zm6.5-7.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z" />
                        <path d="m6.94 7.44 4.95-2.83-2.83 4.95-4.949 2.83 2.828-4.95z" />
                      </svg>
                      <span><LinkRenderer text={c.content} /></span>
                    </div>
                  ) :
                    <div className='chat-user'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                      </svg>
                      <span>{c.content}</span>
                    </div>
                )
              })
            )
          }
        </div>
        <div className='chat-input'>
          <input type='text'
            placeholder='Préguntale a Citybot...'
            onChange={(e) => { promptHandle(e) }}
            value={prompt}
            onKeyDown={(e) => { Keydownhandle(e) }}
          >
          </input>
          <button onClick={(e) => { sendMessages(e) }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
            </svg>
          </button>
        </div>

      </div>
    </div>

  );
}

export default App;
