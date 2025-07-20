import React, { useState } from 'react';
import { MessageSquare, Zap, BarChart3, Users, Clock, Shield } from "lucide-react";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

type PortalOutlookProps = Record<string, never>; // Use Record<string, never> for an empty object type

export const PortalOutlook: React.FC<PortalOutlookProps> = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleMouseEnter = (cardName: string) => {
    setFlippedCard(cardName);
  };

  const handleMouseLeave = () => {
    setFlippedCard(null);
  };

  const features = [
    { name: "Dashboard & Analytics", alt: "Chattalyst Dashboard & Analytics for AI Chatbot Performance", description: "A central hub for accessing all features and an overview of your ecosystem's performance. Visualize key metrics, track performance, and gain actionable insights from your data.", icon: BarChart3, image: "/prd/prd_analytics_2.png" },
    { name: "Chat Module", alt: "Chattalyst AI Agent Chat Module for Customer Service", description: "Engage with customers in real-time, automate responses, and manage conversations efficiently.", icon: MessageSquare, image: "/prd/prd_chatroom.png" },
    { name: "Broadcasting Module", alt: "Chattalyst Broadcasting Module for Marketing Campaigns", description: "Send targeted marketing messages, promotions, and updates to your customer segments.", icon: Zap, image: "/prd/prd_broadcast.png" },
    { name: "Mini CRM", alt: "Chattalyst Mini CRM for Customer Relationship Management", description: "Manage customer data, track interactions, and build detailed profiles for personalized engagement.", icon: BarChart3, image: "/prd/prd_crm.png" },
    { name: "AI Model Management", alt: "Chattalyst AI Model Management for Custom AI Chatbots", description: "Train, update, and manage your custom AI models to ensure they align with your business needs.", icon: Clock, image: "/prd/prd_ai_agent.png" },
    { name: "Sentiment Statistic", alt: "Chattalyst Sentiment Analysis for Customer Feedback", description: "Analyze customer sentiment from conversations to identify trends and areas for improvement.", icon: Shield, image: "/prd/prd_sentiment.png" },
    { name: "Administration and Setting", alt: "Chattalyst Administration and Settings for AI Chatbot Configuration", description: "Configure your ecosystem, manage user access, and customize settings to fit your workflow.", icon: MessageSquare, image: "/prd/prd_admin.png" } // Using MessageSquare as a placeholder icon
  ];

  return (
    <section id="portal-outlook" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Portal Outlook
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A glimpse into the powerful tools at your disposal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item) => (
            <div 
              key={item.name} 
              className={`relative w-full h-64 rounded-2xl shadow-lg transition-all duration-500 transform-style-preserve-3d ${flippedCard === item.name ? 'rotate-y-180' : ''}`}
              onMouseEnter={() => handleMouseEnter(item.name)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Front of the card (Default State) */}
              <div className="absolute w-full h-full backface-hidden bg-gray-100 rounded-2xl p-8 flex flex-col justify-center items-center">
                <div className="bg-yellowai_accent_yellow text-yellowai_dark_purple w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  {item.icon && <item.icon size={24} />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {item.name}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {item.description}
                </p>
              </div>

              {/* Back of the card (Hover State - Flipped) */}
              <div
                className="absolute w-full h-full backface-hidden bg-gradient-to-br from-yellowai_primary_purple to-yellowai_dark_purple rounded-2xl p-8 flex items-center justify-center rotate-y-180"
                onClick={() => {
                  setSelectedImage(item.image);
                  setOpen(true);
                }}
              >
                {item.image && (
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-full h-full object-contain rounded-lg cursor-pointer"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[1275px]">
          {selectedImage && (
            <img src={selectedImage} alt="Preview" className="w-full object-contain" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
