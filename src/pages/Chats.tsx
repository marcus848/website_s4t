
import { useState } from 'react';
import TabNavigation from '../components/TabNavigation';

const Chats = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-20">
      <header className="fixed top-0 left-0 right-0 z-10 bg-white dark:bg-gray-950 shadow-sm p-3">
        <h1 className="text-xl font-bold text-center">Mensagens</h1>
      </header>
      
      <div className="pt-16 pb-4 flex flex-col items-center justify-center p-6 text-center">
        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm max-w-md">
          <h2 className="text-xl font-semibold mb-2">Nenhuma mensagem ainda</h2>
          <p className="text-muted-foreground mb-4">
            Quando você der match com alguém, poderá iniciar uma conversa aqui.
          </p>
          <button 
            onClick={() => window.location.href = "/"}
            className="px-4 py-2 bg-dating-pink text-white rounded-full hover:bg-dating-pink/90 transition"
          >
            Descubra novos perfis
          </button>
        </div>
      </div>
      
      <TabNavigation />
    </div>
  );
};

export default Chats;
