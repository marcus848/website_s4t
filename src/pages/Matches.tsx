
import { useState } from 'react';
import { Profile } from '../models/Profile';
import MatchList from '../components/MatchList';
import TabNavigation from '../components/TabNavigation';
import { useToast } from "@/hooks/use-toast";

interface MatchesPageProps {
  matches?: Profile[];
}

const Matches = ({ matches = [] }: MatchesPageProps) => {
  const { toast } = useToast();
  // We'll use the mock data for now
  const [matchProfiles] = useState<Profile[]>(matches.length > 0 ? matches : []);

  const handleSelectMatch = (profile: Profile) => {
    toast({
      title: `Chat com ${profile.name}`,
      description: "Em uma versão completa, isso abriria um chat.",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <header className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-gray-950 shadow-sm p-3">
        <h1 className="text-xl font-bold text-center">Seus Matches</h1>
      </header>
      
      <div className="pt-16 pb-4">
        <MatchList matches={matchProfiles} onSelectMatch={handleSelectMatch} />
      </div>
      
      <TabNavigation />
    </div>
  );
};

export default Matches;
