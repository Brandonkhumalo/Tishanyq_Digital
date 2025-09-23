import { useState } from "react";
import { MessageCircle, X, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50" data-testid="chat-widget">
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="accent-green-btn p-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105"
        data-testid="chat-toggle-button"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>
      
      {/* Chat Window */}
      {isOpen && (
        <Card className="absolute bottom-16 right-0 w-80 h-96 border border-gray-200 shadow-2xl" data-testid="chat-window">
          <div className="bg-[hsl(var(--accent-green))] text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div>
              <h4 className="font-semibold">Live Support</h4>
              <p className="text-sm text-green-100">We're here to help!</p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-green-100 hover:text-white hover:bg-green-600"
              data-testid="chat-close-button"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="p-4 flex flex-col items-center justify-center h-full text-center text-gray-600">
            <Headphones className="w-16 h-16 text-[hsl(var(--accent-green))] mb-4" />
            <p className="text-sm">
              Chat functionality will be implemented with your preferred live chat service.
            </p>
            <Button 
              className="accent-green-btn mt-4"
              data-testid="start-chat-button"
            >
              Start Conversation
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ChatWidget;
