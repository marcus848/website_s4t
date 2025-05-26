
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLocation, useNavigate } from "react-router-dom";

const TabNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-950 border-t p-2 z-10">
      <Tabs defaultValue={currentPath} className="w-full">
        <TabsList className="w-full bg-dating-light dark:bg-dating-dark">
          <TabsTrigger
            value="/"
            className="flex-1 data-[state=active]:bg-dating-pink data-[state=active]:text-white"
            onClick={() => navigate("/")}
          >
            Descubra
          </TabsTrigger>
          <TabsTrigger
            value="/matches"
            className="flex-1 data-[state=active]:bg-dating-pink data-[state=active]:text-white"
            onClick={() => navigate("/matches")}
          >
            Matches
          </TabsTrigger>
          <TabsTrigger
            value="/chats"
            className="flex-1 data-[state=active]:bg-dating-pink data-[state=active]:text-white"
            onClick={() => navigate("/chats")}
          >
            Mensagens
          </TabsTrigger>
          <TabsTrigger
            value="/profile"
            className="flex-1 data-[state=active]:bg-dating-pink data-[state=active]:text-white"
            onClick={() => navigate("/profile")}
          >
            Perfil
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default TabNavigation;
