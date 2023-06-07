import { useState } from "react";
import "../styles/Openai.css";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "org-SOOnu4d4d2AhrdNDJnRvWzeA",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

function OAI() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e, message) => {
    e.preventDefault();

    if (!message) return;
    setIsTyping(true);
    // scrollTo(0,1e10)

    let messages = chats;
    messages.push({ role: "user", content: message });
    setChats(messages);

    setMessage("");

    await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a Bloom GPT. You can help with any question regarding climate change",
          },
          ...chats,
        ],
      })
      .then((res) => {
        messages.push(res.data.choices[0].message);
        setChats(messages);
        setIsTyping(false);
        // scrollTo(0,1e10)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main>
      <h1 className="Bloom-GPT">Bloom GPT</h1>

      <section>
        {chats && chats.length
          ? chats.map((chat, index) => (
              <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
                <span>
                  <b>{chat.role.toUpperCase()}</b>
                </span>
                <span>:</span>
                <span>{chat.content}</span>
              </p>
            ))
          : ""}
      </section>

      <div className={isTyping ? "" : "hidden"}>
        <p className="assist-gpt">
          <i>{isTyping ? "Typing" : ""}</i>
        </p>
      </div>

      <form action="" onSubmit={(e) => chat(e, message)}>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Ask anything, then press the Enter key."
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </main>
  );
}

export default OAI;