
import { useState, useEffect } from 'react';
import { mockProfiles } from '../data/profiles';
import { Profile } from '../models/Profile';
import ProfileCard from '../components/ProfileCard';
import MatchModal from '../components/MatchModal';
import { useToast } from "@/hooks/use-toast";
import TabNavigation from '@/components/TabNavigation';

const Index = () => {
  const [profiles, setProfiles] = useState<Profile[]>(mockProfiles);
  const [currentProfile, setCurrentProfile] = useState<Profile | null>(null);
  const [matches, setMatches] = useState<Profile[]>([]);
  const [showMatch, setShowMatch] = useState(false);
  const [newMatch, setNewMatch] = useState<Profile | null>(null);
  
  const { toast } = useToast();

  useEffect(() => {
    if (profiles.length > 0) {
      setCurrentProfile(profiles[0]);
    } else {
      setCurrentProfile(null);
    }
  }, [profiles]);

  const handleSwipeLeft = () => {
    setProfiles(prevProfiles => prevProfiles.slice(1));
  };

  const handleSwipeRight = () => {
    if (currentProfile) {
      // Simulate a 30% chance of matching
      const isMatch = Math.random() < 0.3;
      if (isMatch) {
        setMatches(prev => [...prev, currentProfile]);
        setNewMatch(currentProfile);
        setShowMatch(true);
      } else {
        toast({
          title: "Você curtiu o perfil!",
          description: `Você curtiu ${currentProfile.name}! Aguarde para ver se é um match.`,
        });
      }
    }
    setProfiles(prevProfiles => prevProfiles.slice(1));
  };

  const handleStartChat = (profile: Profile) => {
    // In a real app, this would navigate to a chat screen
    toast({
      title: "Chat iniciado!",
      description: `Agora você pode conversar com ${profile.name}.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <header className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-gray-950 shadow-sm p-3 flex justify-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-dating-pink to-dating-purple bg-clip-text text-transparent">
          Loveable
        </h1>
      </header>
      
      <div className="pt-16 pb-4 px-4 flex flex-col items-center min-h-screen">
        {currentProfile ? (
          <div className="swipe-card-container">
            <ProfileCard
              profile={currentProfile}
              onSwipeLeft={handleSwipeLeft}
              onSwipeRight={handleSwipeRight}
            />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[500px] p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Acabaram os perfis!</h2>
            <p className="text-muted-foreground mb-6">
              Parece que você viu todos os perfis disponíveis. Volte mais tarde para descobrir novas pessoas!
            </p>
            <button
              onClick={() => setProfiles(mockProfiles)}
              className="px-6 py-2 bg-dating-pink text-white rounded-full hover:bg-dating-pink/90 transition"
            >
              Reiniciar perfis
            </button>
          </div>
        )}
      </div>
      
      <MatchModal 
        match={newMatch}
        isOpen={showMatch}
        onOpenChange={setShowMatch}
        onStartChat={handleStartChat}
      />
      
      <TabNavigation />
    </div>
  );
};

export default Index;
