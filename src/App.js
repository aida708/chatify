import "./App.css";
import { ChatEngine } from "react-chat-engine";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="a8669f38-21c0-4141-8951-51cfbc406f06"
        // userName={localStorage.getItem("username")}
        userName="eli"
        // userSecret={localStorage.getItem("password")}
        userSecret="12"
        // renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        // onNewMessage={() =>
        //   new Audio(
        //     "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
        //   ).play()
        // }
      />
    </div>
  );
}

export default App;
