
// Added React import to resolve the 'React' namespace error for React.ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image: string;
}

export enum MessageRole {
  USER = 'user',
  AI = 'ai'
}

export interface ChatMessage {
  role: MessageRole;
  content: string;
}
