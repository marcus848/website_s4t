
import { useState } from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import TabNavigation from '@/components/TabNavigation';

const userProfile = {
  name: "Seu Nome",
  age: 28,
  bio: "Sou uma pessoa divertida que ama conhecer novos lugares e pessoas interessantes. Adoro música, cinema e comida boa.",
  photos: ["https://source.unsplash.com/random/400x600?selfie"],
  interests: ["Viagem", "Música", "Filmes", "Gastronomia", "Fotografia"]
};

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <header className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-gray-950 shadow-sm p-3">
        <h1 className="text-xl font-bold text-center">Seu Perfil</h1>
      </header>
      
      <div className="pt-16 pb-4 px-4">
        <Card className="max-w-md mx-auto">
          <CardHeader className="flex flex-col items-center pt-6">
            <Avatar className="h-32 w-32 border-4 border-dating-pink">
              <img src={userProfile.photos[0]} alt="Profile" className="object-cover" />
            </Avatar>
            <div className="mt-4 text-center">
              <CardTitle className="text-2xl">{userProfile.name}, {userProfile.age}</CardTitle>
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="mb-4">
              <h3 className="text-lg font-medium mb-2">Sobre mim</h3>
              <p className="text-muted-foreground">{userProfile.bio}</p>
            </div>
            
            <div>
              <h3 className="text-lg font-medium mb-2">Interesses</h3>
              <div className="flex flex-wrap gap-2">
                {userProfile.interests.map(interest => (
                  <Badge key={interest} variant="outline" className="bg-dating-pink/10 text-dating-pink border-dating-pink/30">
                    {interest}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="flex flex-col gap-2">
            <Button className="w-full bg-dating-pink hover:bg-dating-pink/90">Editar Perfil</Button>
            <Button variant="outline" className="w-full">Configurações</Button>
          </CardFooter>
        </Card>
      </div>
      
      <TabNavigation />
    </div>
  );
};

export default Profile;
