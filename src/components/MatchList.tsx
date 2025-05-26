
import { Avatar } from '@/components/ui/avatar';
import { Profile } from '../models/Profile';

interface MatchListProps {
  matches: Profile[];
  onSelectMatch: (profile: Profile) => void;
}

const MatchList: React.FC<MatchListProps> = ({ matches, onSelectMatch }) => {
  if (matches.length === 0) {
    return (
      <div className="text-center p-6">
        <p className="text-muted-foreground">Você ainda não tem matches</p>
        <p className="text-sm text-muted-foreground">Continue deslizando para encontrar alguém!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {matches.map(match => (
        <div 
          key={match.id} 
          className="flex flex-col items-center p-3 cursor-pointer hover:bg-muted/50 rounded-xl transition"
          onClick={() => onSelectMatch(match)}
        >
          <div className="relative">
            <Avatar className="h-20 w-20 border-2 border-dating-pink">
              <img src={match.photos[0]} alt={match.name} className="object-cover" />
            </Avatar>
            <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-green-500 border-2 border-white"></div>
          </div>
          <span className="mt-2 font-medium text-sm">{match.name}</span>
          <span className="text-xs text-muted-foreground">{match.age} anos</span>
        </div>
      ))}
    </div>
  );
};

export default MatchList;
