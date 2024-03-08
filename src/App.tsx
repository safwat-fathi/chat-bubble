import { useState } from "react";
import ChatInput from "./components/ChatInput";
import ChatMessage from "./components/ChatMessage";
import { TMessage } from "./types/model/message";
import { TUser } from "./types/model/user";
import ChatContainer from "./components/ChatContainer";

const data: TMessage[] = [
  {
    id: "1",
    type: "text",
    content: "Welcome to group everyone !",
    sender: {
      id: "1",
      name: "John Doe",
      avatar: "https://source.unsplash.com/vpOeXr5wmR4/600x600",
    },
  },
  {
    id: "2",
    type: "text",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat at praesentium, aut ullam delectus odio error sit rem. Architecto nulla doloribus laborum illo rem enim dolor odio saepe, consequatur quas?",
    sender: {
      id: "2",
      name: "Zaki Doe",
      avatar: "https://source.unsplash.com/vpOeXr5wmR4/600x600",
    },
  },
  {
    id: "3",
    type: "image",
    content:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.7ZltE0XDT2j9Z_0gjw2PKwHaD4%26pid%3DApi&f=1&ipt=5fdbfbdc81504e694f51bf13f7b53253da88fd9c8166620e1e8f2daaadeb06c1&ipo=images",
    sender: {
      id: "3",
      name: "Ali Doe",
      avatar: "https://source.unsplash.com/vpOeXr5wmR4/600x600",
    },
  },
];

const user: TUser = {
  id: "1",
  name: "John Doe",
  avatar: "https://source.unsplash.com/vpOeXr5wmR4/600x600",
};

function App() {
  const [messages, setMessages] = useState<TMessage[]>(data);

  const handleSendMessage = async (content: File | string) => {
    try {
      const newMessage: TMessage = {
        type: content instanceof File ? "image" : "text",
        id: String(messages.length + 1),
        content:
          content instanceof File ? URL.createObjectURL(content) : content,
        sender: user,
      };

      setMessages([...messages, newMessage]);

      // handle sending message to server
      // ....
    } catch (error) {
      throw new Error(error as any);
    }
  };

  return (
    <ChatContainer title="Group Chat" avatar={user.avatar} color="blue-500">
      <div className="flex flex-col mt-5 h-64 overflow-y-auto">
        {messages.map(message => (
          <ChatMessage
            key={message.id}
            type={message.type}
            inbound={message.sender.id == user.id}
            avatar={message.sender.avatar}
            message={message.content}
          />
        ))}
      </div>

      <ChatInput onSendMessage={handleSendMessage} />
    </ChatContainer>
  );
}

export default App;
