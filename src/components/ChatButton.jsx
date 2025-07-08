"use client";

import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { useChat } from './ChatProvider';

export default function ChatButton() {
  const { isChatOpen, toggleChat, closeChat } = useChat();
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message submission here
      console.log('Message sent:', message);
      setMessage('');
    }
  };

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Button */}
        <button
          onClick={toggleChat}
          className="w-14 h-14 bg-white hover:bg-gray-50 text-black rounded-full shadow-lg hover:shadow-2xl transition-all duration-200 flex items-center justify-center border border-gray-200"
          aria-label="Open chat"
        >
          {isChatOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>

        {/* Chat Window */}
        {isChatOpen && (
          <div className="absolute bottom-16 right-0 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
            {/* Header */}
            <div className="bg-white text-black px-4 py-3 rounded-t-lg flex items-center justify-between border-b border-gray-200">
              <div>
                <h3 className="font-semibold text-sm text-black">Allkind Support</h3>
                <p className="text-xs text-gray-600">We typically reply in a few minutes</p>
              </div>
              <button
                onClick={closeChat}
                className="text-black hover:text-gray-600 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto bg-white">
              <div className="space-y-3">
                {/* Welcome Message */}
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-medium">A</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg px-3 py-2 shadow-sm max-w-xs">
                    <p className="text-sm text-black">
                      Hi! 👋 How can we help you today?
                    </p>
                  </div>
                </div>

                {/* Example Response */}
                <div className="flex items-start space-x-2 justify-end">
                  <div className="bg-gray-800 text-white rounded-lg px-3 py-2 shadow-sm max-w-xs">
                    <p className="text-sm">
                      I need help with my contract
                    </p>
                  </div>
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 text-xs font-medium">U</span>
                  </div>
                </div>

                {/* Agent Response */}
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-medium">A</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg px-3 py-2 shadow-sm max-w-xs">
                    <p className="text-sm text-black">
                      Of course! I'd be happy to help you with your contract. What specific issue are you experiencing?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-200 bg-white">
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent text-sm text-black"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
} 