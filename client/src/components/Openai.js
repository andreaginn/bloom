import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const systemMessage = {
  "role": "system", "content": "Explain things like you're talking to someone with 2 years of climate change experience."
}

function Openai() {
  const [messages, setMessages] = useState([
    {
      message: "I'm Bloom GPT! Ask anything to learn more about climate change or carbon emissions!",
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

  return (
    <div className="grid grid-cols-2 gap-4 p-10">
        <div style={{ position: "sticky", height: "500px", width: "450px" }}>
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
        <div className="col-start-2 col-end-7 text-6xl pl-10 pt-20 font-bold text-slate-700 mt-3 mr-3" style={{ display: 'inline-block' }}>
        <span className="text-orange-400">Learn</span> more! Just ask Bloom GPT.
        </div>
      </div>
  )
}

export default Openai;
