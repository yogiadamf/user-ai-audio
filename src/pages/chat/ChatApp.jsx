import React, { useState } from 'react';

// MessageInput Component
const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message, 'user'); // Sending 'user' to indicate the sender
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 mt-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-grow p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Send
      </button>
    </form>
  );
};

// MessageList Component
const MessageList = ({ messages }) => {
  return (
    <div className="message-list space-y-3 h-72 overflow-y-auto p-4 border border-gray-300 rounded-lg">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`message p-2 rounded-md shadow-sm max-w-xs ${
            msg.sender === 'bot' ? 'bg-gray-100 text-left' : 'bg-blue-100 text-right'
          } ${msg.sender === 'bot' ? 'ml-4' : 'mr-4'}`}
        >
          {msg.text}
        </div>
      ))}
    </div>
  );
};

// ChatApp Component
const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage, sender) => {
    // Add user message to state
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: newMessage, sender: sender },
    ]);

    // Simulate a bot reply after 1.5 seconds
    if (sender === 'user') {
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Bot: Thanks for your message! How can I assist you today?", sender: 'bot' },
        ]);
      }, 1500); // Delay for bot reply
    }
  };

  return (
    <div className="chat-app max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
      <MessageList messages={messages} />
      <MessageInput onSend={handleSendMessage} />
    </div>
  );
};

export default ChatApp;
