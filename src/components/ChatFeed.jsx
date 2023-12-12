import React from "react";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";

export default function ChatFeed(props) {
  console.log(props);
  /* destructure the elements i get from the props:  */
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  //   every message will have a unique key:
  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.userName;

      //render all the messages of that particular chat
      return (
        <div key={`msg_${index}`} style={{ width: "100px" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <TheirMessage
                message={message}
                lastMessageKey={messages[lastMessageKey]}
              />
            )}
          </div>
        </div>
      );
    });
  };

  return <div>{}</div>;
}
