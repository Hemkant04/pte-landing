'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const predefinedResponses = [

  // 🔹 1. Greeting
  {
    keywords: ['hi', 'hello', 'hey', 'namaste', 'greetings'],
    answer: `Namaste! 👋 Welcome to PTE Nepal.

I can help you with:
• Mock Tests
• Date Booking
• Pricing
• Preparation

<button onclick="window.open('https://wa.me/9779762419564','_blank')">
Chat on WhatsApp
</button>`
  },

  // 🔹 2. Pricing
  {
    keywords: ['price','pricing','cost','how much','fee','charge','package','plan'],
    answer: `We offer:

1. Mock Test – Rs. 2,350  
2. Booking – Rs. 27,000  
3. Combo – Rs. 27,799 (10 days access) 

<button onclick="window.open('https://wa.me/9779762419564','_blank')">
Get Started
</button>`
  },

  // 🔹 3. Mock Test
  {
    keywords: ['mock test','practice','pte practice','apeuni'],
    answer: `Mock Test includes:

• Unlimited tests  
• Real exam simulation  
• AI scoring  
• Reports  

<button onclick="window.open('https://wa.me/9779762419564','_blank')">
Start Practice
</button>`
  },

  // 🔹 4. Booking
  {
    keywords: ['booking','exam date','slot booking'],
    answer: `We help you book your PTE exam easily.

• Available dates  
• Full support  
• Center details  

<button onclick="window.open('https://wa.me/9779762419564','_blank')">
Book Now
</button>`
  },

  // 🔹 5. Combo
  {
    keywords: ['combo','full package'],
    answer: `Combo Package:

• Mock + Booking  
• Priority support  
• Save Rs. 300  

<button onclick="window.open('https://wa.me/9779762419564','_blank')">
Get Combo
</button>`
  },

  // 🔹 6. Payment
  {
    keywords: ['payment','pay','fonepay'],
    answer: `Payment methods:

• Fonepay QR  
• Bank transfer  

After payment, send screenshot.

<button onclick="window.open('https://wa.me/9779762419564','_blank')">
Send Screenshot
</button>`
  },

  // 🔹 7. Contact
  {
    keywords: ['contact','phone','whatsapp','number'],
    answer: `Contact us:

📧 info.pte4u@gmail.com  
📍 Lalitpur, Nepal  

<button onclick="window.open('https://wa.me/9779762419564','_blank')">
Chat Now
</button>`
  },

  // 🔹 8. Buy Intent
  {
    keywords: ['buy','purchase','start now','interested'],
    answer: `Great! 🎯

We’ll guide you step-by-step.

<button onclick="window.open('https://wa.me/9779762419564','_blank')">
Start Now
</button>`
  },

  // 🔹 9. Fallback
  {
    keywords: [],
    answer: `Sorry, I didn’t understand 😅

Try asking about:
• Price
• Mock test
• Booking

<button onclick="window.open('https://wa.me/9779762419564','_blank')">
Chat with Us
</button>`
  }

];

const defaultResponse = "I'm not sure about that. You can ask me about:\n\n• Pricing and packages\n• Mock test details\n• Date booking service\n• Contact information\n• Results and scores\n\nOr contact us directly at 9762419564 for more help!";

function findResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  for (const item of predefinedResponses) {
    if (item.keywords.some(keyword => message.includes(keyword))) {
      return item.answer;
    }
  }
  
  return defaultResponse;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! 👋 How can I help you with PTE preparation today?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = findResponse(userMessage);
      setMessages(prev => [...prev, { type: 'bot', text: response }]);
      setIsTyping(false);
    }, 800);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickReplies = [
    { label: 'Pricing', text: 'What are your prices?' },
    { label: 'Mock Tests', text: 'Tell me about mock tests' },
    { label: 'Booking', text: 'How to book PTE date?' },
    { label: 'Contact', text: 'How can I contact you?' }
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed bottom-6 right-20 z-40
          w-14 h-14
          rounded-full
          bg-accent text-zinc-950
          shadow-lg shadow-accent/30
          flex items-center justify-center
          transition-all duration-300 ease-out
          hover:scale-110 hover:shadow-xl hover:shadow-accent/40
          focus:outline-none focus:ring-2 focus:ring-accent/50
          ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}
        `}
        aria-label="Open chat"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {/* Chat Window */}
      <div
        className={`
          fixed bottom-6 right-6 z-50
          w-[350px] sm:w-[380px]
          h-[500px]
          rounded-2xl
          bg-white/95 dark:bg-zinc-900/95
          backdrop-blur-xl
          border border-zinc-200 dark:border-white/10
          shadow-2xl shadow-black/20
          flex flex-col
          transition-all duration-300 ease-out
          ${isOpen ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-4 opacity-0 scale-95 pointer-events-none'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-white/10 bg-gradient-to-r from-accent/10 to-transparent rounded-t-2xl">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-zinc-950" />
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">PTE Assistant</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">Online</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-white/10 transition-colors"
            aria-label="Close chat"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`
                  max-w-[80%] px-4 py-2.5 rounded-2xl text-sm whitespace-pre-line
                  ${msg.type === 'user'
                    ? 'bg-accent text-zinc-950 rounded-br-md'
                    : 'bg-zinc-100 dark:bg-white/10 text-zinc-800 dark:text-zinc-200 rounded-bl-md [&_button]:mt-2 [&_button]:px-3 [&_button]:py-1.5 [&_button]:bg-accent [&_button]:text-zinc-950 [&_button]:rounded-full [&_button]:text-xs [&_button]:font-semibold [&_button]:cursor-pointer [&_button]:hover:bg-accent/90 [&_button]:transition-colors [&_button]:!flex [&_button]:items-center [&_button]:justify-center [&_button]:w-full'
                  }
                `}
                dangerouslySetInnerHTML={msg.type === 'bot' ? { __html: msg.text } : undefined}
              >
                {msg.type === 'user' ? msg.text : null}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-zinc-100 dark:bg-white/10 px-4 py-2.5 rounded-2xl rounded-bl-md flex items-center gap-1">
                <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <span className="w-2 h-2 bg-zinc-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        <div className="px-4 py-2 flex flex-wrap gap-2 border-t border-zinc-200 dark:border-white/10">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              onClick={() => {
                setInputValue(reply.text);
                setTimeout(() => handleSend(), 100);
              }}
              className="px-3 py-1.5 text-xs font-medium bg-zinc-100 dark:bg-white/10 text-zinc-700 dark:text-zinc-300 rounded-full hover:bg-accent/20 hover:text-accent transition-colors"
            >
              {reply.label}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 border-t border-zinc-200 dark:border-white/10">
          <div className="flex items-center gap-2 bg-zinc-100 dark:bg-white/10 rounded-full px-4 py-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your question..."
              className="flex-1 bg-transparent text-sm text-zinc-900 dark:text-white placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none"
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              className="p-2 rounded-full bg-accent text-zinc-950 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent/90 transition-colors"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
