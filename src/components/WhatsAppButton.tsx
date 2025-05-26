
import { Button } from "@/components/ui/button";
import Whats from "@/assets/whatsapp.svg";
// This component creates a WhatsApp button that opens a chat with a specific number when clicked.
const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5511961148529", "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-5 right-5 z-50 rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center"
    >

      <img src={Whats} alt="WhatsApp" className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppButton;
