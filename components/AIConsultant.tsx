
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, X, Bot, User, Loader2, Zap } from 'lucide-react';
import { getFitnessAdvice } from '../services/geminiService';
import { ChatMessage, MessageRole } from '../types';

interface AIConsultantProps {
  onClose: () => void;
}

const AIConsultant: React.FC<AIConsultantProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: MessageRole.AI, content: "Welcome to PowerOn Elite. I'm your performance consultant. How can I optimize your training today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: MessageRole.USER, content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const advice = await getFitnessAdvice(input);
    setMessages(prev => [...prev, { role: MessageRole.AI, content: advice }]);
    setIsLoading(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 100, scale: 0.9 }}
      className="fixed bottom-32 right-8 w-[90vw] md:w-[400px] h-[550px] bg-[#111] border border-white/10 shadow-2xl z-50 rounded-3xl overflow-hidden flex flex-col"
    >
      {/* Header */}
      <div className="p-4 bg-[#CBFF00] flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
            <Zap className="text-[#CBFF00]" size={20} fill="currentColor" />
          </div>
          <div>
            <div className="text-black font-bold uppercase text-sm leading-none">PowerOn AI</div>
            <div className="text-black/60 text-[10px] uppercase font-bold tracking-widest">Active Consultant</div>
          </div>
        </div>
        <button onClick={onClose} className="p-2 hover:bg-black/10 rounded-full transition-colors">
          <X className="text-black" size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
              msg.role === MessageRole.USER 
                ? 'bg-[#CBFF00] text-black font-medium' 
                : 'bg-white/5 text-gray-200 border border-white/10'
            }`}>
              {msg.content}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10">
              <Loader2 className="animate-spin text-[#CBFF00]" size={20} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-white/5">
        <div className="relative">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about training, macros, recovery..."
            className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 text-sm focus:outline-none focus:border-[#CBFF00]/50 pr-12"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-[#CBFF00] rounded-full flex items-center justify-center disabled:opacity-50 transition-all"
          >
            <Send size={14} className="text-black" />
          </button>
        </div>
        <div className="mt-3 text-[10px] text-gray-600 text-center uppercase tracking-widest font-bold">
          Powered by Gemini 2.5 Elite Performance Engine
        </div>
      </div>
    </motion.div>
  );
};

export default AIConsultant;
