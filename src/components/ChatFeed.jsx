import React from "react";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";
import MessageForm from "./MessageForm";

export default function ChatFeed(props) {
  console.log(props);
  /* destructure the elements i get from the props:  */
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  //   render the messages to the left or right
  const renderReadReceipts = (message, isMyMessage) =>
    chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className="read-receipt"
            style={{
              float: isMyMessage ? "right" : "left",
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    );

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

          <div
            className="read-reciepts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          >
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle"></div>
        {renderMessages()}
        <div style={{ height: "100px" }} />
        <div className="message-form-container">
          {/* sending new prop , presenting the active chat: */}
          <MessageForm {...props} chatId={activeChat} />
        </div>
      </div>
    </div>
  );
}
