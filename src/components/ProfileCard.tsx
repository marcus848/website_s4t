
import { useState } from 'react';
import { Profile } from '../models/Profile';
import { Card } from '@/components/ui/card';
import { X, Heart, MessageCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProfileCardProps {
  profile: Profile;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onSwipeLeft, onSwipeRight }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [swipeAnimation, setSwipeAnimation] = useState<string | null>(null);

  const handleNextPhoto = () => {
    if (currentPhotoIndex < profile.photos.length - 1) {
      setCurrentPhotoIndex(prev => prev + 1);
    }
  };

  const handlePrevPhoto = () => {
    if (currentPhotoIndex > 0) {
      setCurrentPhotoIndex(prev => prev - 1);
    }
  };

  const handleSwipeLeft = () => {
    setSwipeAnimation('animate-swipe-left');
    setTimeout(() => {
      onSwipeLeft();
      setSwipeAnimation(null);
    }, 500);
  };

  const handleSwipeRight = () => {
    setSwipeAnimation('animate-swipe-right');
    setTimeout(() => {
      onSwipeRight();
      setSwipeAnimation(null);
    }, 500);
  };

  return (
    <Card className={`relative overflow-hidden rounded-xl shadow-lg h-full ${swipeAnimation}`}>
      <div className="absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black/60 to-transparent p-4">
        <div className="flex gap-1">
          {profile.photos.map((_, index) => (
            <div 
              key={index} 
              className={`h-1 flex-1 rounded-full ${index === currentPhotoIndex ? 'bg-white' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </div>
      
      <div 
        className="h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${profile.photos[currentPhotoIndex]})` }}
        onClick={handleNextPhoto}
      >
        <div className="flex h-full">
          <div className="w-1/3 h-full" onClick={(e) => { e.stopPropagation(); handlePrevPhoto(); }}></div>
          <div className="w-2/3 h-full"></div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-6">
        <div className="text-white">
          <h2 className="text-2xl font-bold">{profile.name}, {profile.age}</h2>
          <p className="text-sm opacity-90 mb-2">{profile.distance} km de distância</p>
          
          {profile.interests && (
            <div className="flex flex-wrap gap-2 mb-3">
              {profile.interests.map(interest => (
                <Badge key={interest} variant="secondary" className="bg-white/20 hover:bg-white/30 text-white">
                  {interest}
                </Badge>
              ))}
            </div>
          )}
          
          <p className="text-sm line-clamp-2 opacity-80">{profile.bio}</p>
        </div>
      </div>

      <div className="absolute bottom-28 left-0 right-0 flex justify-center gap-4">
        <button 
          onClick={handleSwipeLeft}
          className="h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
        >
          <X className="h-10 w-10 text-dating-pink" />
        </button>
        <button 
          onClick={handleSwipeRight}
          className="h-16 w-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
        >
          <Heart className="h-8 w-8 text-dating-pink" fill="#FF4D8D" />
        </button>
      </div>
    </Card>
  );
};

export default ProfileCard;
