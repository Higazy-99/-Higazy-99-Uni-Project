import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'model', text: 'مرحباً بك في البوابة الأكاديمية. كيف يمكنني مساعدتك اليوم؟' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Initialize Gemini Client
      // Note: In a real production app, API calls should be proxied through a backend to hide the key.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const chat = ai.chats.create({
        model: 'gemini-3-pro-preview',
        config: {
          systemInstruction: "You are a helpful academic assistant for Cairo University Student Portal. You help students with registration, grades, schedules, and general university inquiries. You speak Arabic by default but can answer in English if asked. Be concise and polite.",
        },
        history: messages.map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        }))
      });

      const result = await chat.sendMessageStream({ message: input });
      
      let fullResponse = "";
      const modelMessageId = (Date.now() + 1).toString();
      
      // Add placeholder for streaming
      setMessages(prev => [...prev, { id: modelMessageId, role: 'model', text: '' }]);

      for await (const chunk of result) {
        const chunkText = chunk.text || "";
        fullResponse += chunkText;
        
        setMessages(prev => prev.map(msg => 
          msg.id === modelMessageId ? { ...msg, text: fullResponse } : msg
        ));
      }
      
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { id: Date.now().toString(), role: 'model', text: 'عذراً، حدث خطأ في الاتصال. يرجى المحاولة لاحقاً.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 left-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'bg-red-500 rotate-90' : 'bg-primary hover:bg-primary-light'
        } text-white`}
      >
        <span className="material-symbols-outlined text-2xl">
          {isOpen ? 'close' : 'smart_toy'}
        </span>
      </button>

      {/* Chat Window */}
      <div
        className={`fixed bottom-24 left-6 z-40 w-[90vw] md:w-[400px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 transition-all duration-300 transform origin-bottom-left flex flex-col overflow-hidden ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none'
        }`}
        style={{ maxHeight: 'calc(100vh - 120px)', height: '600px' }}
      >
        {/* Header */}
        <div className="bg-primary p-4 flex items-center gap-3 text-white shadow-md">
          <div className="bg-white/20 p-2 rounded-full">
            <span className="material-symbols-outlined text-xl">smart_toy</span>
          </div>
          <div>
            <h3 className="font-bold text-sm">المساعد الذكي</h3>
            <p className="text-[10px] text-blue-100 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              متصل (Gemini Pro)
            </p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50 dark:bg-slate-950 scroll-smooth">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'bg-primary text-white rounded-tr-none'
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-tl-none shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-end">
              <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-sm flex gap-1">
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-end gap-2 bg-slate-100 dark:bg-slate-800 rounded-xl p-2 border border-transparent focus-within:border-primary/50 focus-within:bg-white dark:focus-within:bg-slate-900 transition-all">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="اكتب رسالتك هنا..."
              className="flex-1 bg-transparent border-none focus:ring-0 resize-none text-sm text-slate-800 dark:text-slate-200 max-h-24 p-2"
              rows={1}
              style={{ minHeight: '40px' }}
            />
            <button
              onClick={handleSend}
              disabled={!input.trim() || isLoading}
              className="p-2 bg-primary text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary-light transition-colors"
            >
              <span className="material-symbols-outlined text-xl rtl:rotate-180">send</span>
            </button>
          </div>
          <p className="text-[10px] text-center text-slate-400 mt-2">
            قد يرتكب الذكاء الاصطناعي أخطاء. يرجى التحقق من المعلومات الهامة.
          </p>
        </div>
      </div>
    </>
  );
};

export default Chatbot;