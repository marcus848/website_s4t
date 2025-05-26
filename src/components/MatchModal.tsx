
import React from 'react';
import { Profile } from '../models/Profile';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { MessageCircle } from 'lucide-react';

interface MatchModalProps {
  match: Profile | null;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onStartChat: (profile: Profile) => void;
}

const MatchModal: React.FC<MatchModalProps> = ({ match, isOpen, onOpenChange, onStartChat }) => {
  if (!match) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md text-center">
        <DialogHeader>
          <DialogTitle className="text-2xl text-dating-pink">Vocês deram match!</DialogTitle>
        </DialogHeader>
        <div className="flex justify-center gap-4 my-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-dating-pink">
              <img 
                src="https://source.unsplash.com/random/200x200?selfie" 
                alt="Your profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 text-2xl">❤️</div>
          </div>
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-dating-pink">
            <img 
              src={match.photos[0]} 
              alt={match.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <p className="text-center mb-6">
          Você e {match.name} gostaram um do outro. Inicie uma conversa agora!
        </p>
        <div className="flex justify-center gap-4">
          <Button 
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Continuar curtindo
          </Button>
          <Button 
            onClick={() => {
              onStartChat(match);
              onOpenChange(false);
            }}
            className="bg-dating-pink hover:bg-dating-pink/90"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Enviar mensagem
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MatchModal;
