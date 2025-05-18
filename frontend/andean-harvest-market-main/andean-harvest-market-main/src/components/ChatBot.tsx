
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; content: string }[]>([
    { role: "bot", content: "¡Hola! Soy el asistente virtual de GreenChAIn. ¿En qué puedo ayudarte con nuestros productos orgánicos?" }
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage = { role: "user" as const, content: inputMessage };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botResponses = [
        "¡Gracias por tu pregunta! Todos nuestros productos son cultivados orgánicamente por agricultores peruanos certificados.",
        "Ofrecemos envíos a todo el país. El tiempo de entrega es de 24-48 horas dependiendo de tu ubicación.",
        "Nuestros productos son cosechados el mismo día que son enviados para garantizar su frescura.",
        "Apoyamos directamente a más de 200 familias de agricultores en diferentes regiones de Perú.",
        "Las certificaciones orgánicas de nuestros agricultores son verificadas anualmente por organizaciones internacionales."
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { role: "bot", content: randomResponse }]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-background border rounded-lg shadow-lg w-80 sm:w-96 flex flex-col transition-all duration-300 ease-in-out">
          <div className="bg-primary text-primary-foreground p-3 rounded-t-lg flex justify-between items-center">
            <span className="font-medium flex items-center gap-2">
              <MessageSquare className="h-5 w-5" /> Chat GreenChAIn
            </span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-6 w-6 rounded-full text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
              onClick={toggleChat}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="p-3 h-80 overflow-y-auto flex flex-col gap-3">
            {messages.map((message, i) => (
              <div 
                key={i} 
                className={cn(
                  "p-3 rounded-lg max-w-[80%] text-sm",
                  message.role === "user" 
                    ? "bg-primary/10 text-foreground ml-auto" 
                    : "bg-secondary text-secondary-foreground mr-auto"
                )}
              >
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className="bg-secondary text-secondary-foreground p-3 rounded-lg max-w-[80%] mr-auto flex gap-1 items-center text-sm">
                <span className="animate-bounce">●</span>
                <span className="animate-bounce delay-75">●</span>
                <span className="animate-bounce delay-150">●</span>
              </div>
            )}
          </div>
          <div className="p-3 border-t">
            <div className="flex gap-2">
              <Textarea 
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Escribe tu mensaje..."
                className="text-sm min-h-[40px] resize-none"
              />
              <Button 
                onClick={handleSendMessage} 
                disabled={!inputMessage.trim() || isLoading}
                className="shrink-0"
              >
                Enviar
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <Button 
          onClick={toggleChat}
          className="h-14 w-14 rounded-full shadow-lg flex items-center justify-center bg-primary hover:bg-primary/90"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatBot;