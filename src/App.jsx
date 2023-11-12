import { useState } from "react";
import ChatSubmit from "./components/ChatSubmit";
import ChatView from "./components/ChatView";

const App = () => {
  const [content, setContent] = useState("");

  return (
    <div className="min-h-screen flex">
      <div className="bg-blue-100 w-1/4 min-w-[120px]">Side</div>
      <div className="w-full flex flex-col">
        <ChatView />
        <ChatSubmit content={content} setContent={setContent} />
      </div>
    </div>
  );
};

export default App;
