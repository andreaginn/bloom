import { useState, useEffect } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import Aos from "aos";
import "aos/dist/aos.css";

const systemMessage = {
  "role": "system", "content": "Explain things like you're talking to someone with 2 years of climate change experience."
}

function Openai() {
  const [messages, setMessages] = useState([
    {
      message: "I'm BloomChat! Ask anything to learn more about climate change or carbon emissions!",
      sentTime: "just now",
      sender: "BloomGPT"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendReq = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "BloomGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message }
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apiMessages
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": "Bearer " + process.env.REACT_APP_OPENAI_KEY,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(apiRequestBody)
      }).then((data) => {
        return data.json();
      }).then((data) => {
        console.log(data);
        setMessages([...chatMessages, {
          message: data.choices[0].message.content,
          sender: "BloomGPT"
        }]);
        setIsTyping(false);
      });
  }
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div data-aos="fade-right" className="grid grid-cols-4 gap-4 my-5">
      <div className="col-start-2 col-end-4 md:col-start-2 md:col-end-3 ml-5">
        <div data-aos="fade-left" class="text-2xl md:text-4xl font-bold text-slate-700 mr-2 md:visible" style={{ display: 'inline-block' }}>
          Learn more!<br /> Just ask<span className="text-orange-400">BloomChat</span>
        </div>
      </div>
      <div className="col-start-1 col-end-5 pl-4 md:col-start-3 md:col-end-5 mr-7">
        <div style={{ position: "sticky", height: "400px" }}>
          <MainContainer>
            <ChatContainer>
              <MessageList
                scrollBehavior="smooth"
                typingIndicator={isTyping ? <TypingIndicator content="Bloom GPT is typing" /> : null}
              >
                {messages.map((message, i) => {
                  console.log(message)
                  return <Message key={i} model={message} />
                })}
              </MessageList>
              <MessageInput placeholder="Type message here" onSend={handleSendReq} attachButton={false} />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </div>
  )
}

export default Openai;
